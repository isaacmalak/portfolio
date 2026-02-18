import { NextResponse } from "next/server";

export function GET() {
  const email = "isaacmalak123@gmail.com";
  return NextResponse.json({ email });
}
