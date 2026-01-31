import { NextRequest, NextResponse } from "next/server";
import { typingParamsSchema } from "@/lib/validations";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ minLength: string }> }
) {
  const { minLength } = await params;

  // Validate params with Zod
  const validation = typingParamsSchema.safeParse({ minLength });
  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.errors[0].message },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `https://api.quotable.io/random?minLength=${minLength}`
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch quote" },
        { status: response.status }
      );
    }

    const data = await response.json();

    // Remove semicolon if it exists
    const quote = data.content.endsWith(";")
      ? data.content.slice(0, -1)
      : data.content;

    return NextResponse.json({ quote, author: data.author });
  } catch (err) {
    console.error("Typing API error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
