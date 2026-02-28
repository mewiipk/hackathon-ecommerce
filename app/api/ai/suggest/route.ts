import { NextRequest, NextResponse } from "next/server";

type Body = {
  review?: string;
  persona?: string;
};

function detectSentiment(text: string) {
  const lower = text.toLowerCase();
  if (["broken", "refund", "late", "bad"].some((word) => lower.includes(word))) return "negative";
  if (["good", "great", "fast", "love"].some((word) => lower.includes(word))) return "positive";
  return "neutral";
}

export async function POST(req: NextRequest) {
  const body = (await req.json()) as Body;
  const review = body.review ?? "";
  const persona = body.persona ?? "friendly";
  const sentiment = detectSentiment(review);
  const suggestion =
    sentiment === "negative"
      ? `Hi, we're sorry for the issue. Our ${persona} support team will resolve this quickly and update you today.`
      : sentiment === "positive"
        ? `Thank you for the kind words! We're happy you had a great experience with our shop.`
        : `Thanks for your feedback. Could you share a bit more so we can improve your next order?`;

  return NextResponse.json({ sentiment, suggestion });
}
