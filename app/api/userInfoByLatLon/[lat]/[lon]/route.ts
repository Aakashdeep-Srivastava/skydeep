import { NextRequest, NextResponse } from "next/server";
import { userInfoByLatLonParamsSchema } from "@/lib/validations";

interface AddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}

interface GeocodeResult {
  address_components: AddressComponent[];
}

const extractZipCode = (results: GeocodeResult[]): string => {
  if (!Array.isArray(results)) return "00000";

  for (const result of results) {
    const components = result.address_components;
    if (!components?.length) continue;

    const lastComponent = components[components.length - 1];
    if (!isNaN(Number(lastComponent.long_name))) {
      return lastComponent.long_name;
    }
  }
  return "00000";
};

const getZipCodeFromCoords = async (lat: string, lon: string): Promise<string> => {
  const apiKey = process.env.GOOGLE_API_KEY;
  if (!apiKey) {
    console.error("Google API key not configured");
    return "00000";
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${apiKey}`
    );

    if (!response.ok) {
      throw new Error(`Google API returned ${response.status}`);
    }

    const data = await response.json();
    return extractZipCode(data.results);
  } catch (err) {
    console.error("Google geocoding API error:", err);
    return "00000";
  }
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ lat: string; lon: string }> }
) {
  const { lat, lon } = await params;

  // Validate params with Zod
  const validation = userInfoByLatLonParamsSchema.safeParse({ lat, lon });
  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.errors[0].message },
      { status: 400 }
    );
  }

  const result = await getZipCodeFromCoords(lat, lon);
  return NextResponse.json({ zipCode: result });
}
