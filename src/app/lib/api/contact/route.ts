// app/api/product/route.ts (или .js)
import { NextResponse } from "next/server";
import { sendMessage } from "@/utils/telegraf";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const success = await sendMessage(body.message);

    return NextResponse.json({ ok: success });
  } catch (error) {
    console.error("Ошибка при отправке в Telegram:", error);
    return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
  }
}
