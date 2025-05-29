import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();
    console.log("Received prompt:", prompt);

    const response = await fetch(`${process.env.LLM_API_URL}/api/generate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: "gemma3:1b", prompt, stream: false }),
    });

    console.log("LLM container response status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("LLM container error response:", errorText);
      return NextResponse.json(
        { error: "LLM request failed" },
        { status: 500 }
      );
    }
    console.log(response);
    const data = await response.json();
    console.log("LLM container response body:", data);

    return NextResponse.json({ response: data.response });
  } catch (error) {
    console.error("Unexpected error in /api/query-llm:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
