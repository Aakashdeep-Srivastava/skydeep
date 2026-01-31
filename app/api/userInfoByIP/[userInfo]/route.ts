import { NextRequest, NextResponse } from "next/server";
import { userInfoByIPParamsSchema } from "@/lib/validations";

interface AddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}

interface GeocodeResult {
  address_components: AddressComponent[];
}

const HasZipCode = (results: GeocodeResult[]): string => {
  if (!Array.isArray(results)) return "00000";

  for (const result of results) {
    const components = result.address_components;
    if (!components?.length) continue;

    const lastComponent = components[components.length - 1];
    const value = lastComponent.long_name.replaceAll(" ", "");
    if (!isNaN(Number(value))) {
      return lastComponent.long_name;
    }
  }
  return "00000";
};

const getZipCode = async (lat: number, lon: number): Promise<string> => {
  const apiKey = process.env.GOOGLE_API_KEY;
  if (!apiKey) {
    console.error("Google API key not configured");
    return "00000";
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${apiKey}`
    );
    const data = await response.json();
    return HasZipCode(data.results);
  } catch (err) {
    console.error("Google geocoding API error:", err);
    return "00000";
  }
};

const getGeolocation = async (ip: string) => {
  try {
    const response = await fetch(`http://ip-api.com/json/${ip}`);
    if (!response.ok) {
      throw new Error(`IP API returned ${response.status}`);
    }

    const data = await response.json();

    if (data.status === "fail") {
      return { error: data.message || "Failed to get location" };
    }

    return {
      zip: await getZipCode(data.lat, data.lon),
      country: data.country,
      countryCode: data.countryCode,
      region: data.region,
      regionName: data.regionName,
      city: data.city,
      datetime: new Date().toLocaleString("en-US", {
        timeZone: data.timezone,
      }),
      lat: data.lat,
      lon: data.lon,
      timezone: data.timezone,
      isp: data.isp,
      org: data.org,
      as: data.as,
      query: data.query,
    };
  } catch (err) {
    console.error("Geolocation error:", err);
    return { error: "Failed to fetch geolocation data" };
  }
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ userInfo: string }> }
) {
  const { userInfo } = await params;

  // Validate params with Zod
  const validation = userInfoByIPParamsSchema.safeParse({ userInfo });
  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.errors[0].message },
      { status: 400 }
    );
  }

  const result = await getGeolocation(userInfo);

  if (result && 'error' in result) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  return NextResponse.json(result);
}
