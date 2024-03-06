import { sendMail } from "@/libs/mail";

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  try {
    await sendMail({
      to: "info@redpositive.in",
      name: "Mohd Shahjahan",
      subject: "Test Mail",
      body: `${JSON.stringify(body.toSendData)}`,
    });
    return NextResponse.json({ message: "Mail sent successfully" });
  } catch (error) {
    return NextResponse.json(error);
  }
}
