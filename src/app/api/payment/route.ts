import { NextResponse } from "next/server";
import { config } from "@/shared/utils/config";
import { httpClient } from "@/shared/utils/httpClient";
import { PaymentResponse } from "@/features/checkout/types";

const { IZIPAY_URL_PAYMENT, IZIPAY_USER, IZIPAY_PASSWORD } = config();

export async function POST(req: Request) {
  if (!IZIPAY_USER || !IZIPAY_PASSWORD || !IZIPAY_URL_PAYMENT) {
    return NextResponse.json({ error: "Missing env vars" }, { status: 500 });
  }

  const body = await req.json();

  const auth =
    "Basic " +
    Buffer.from(`${IZIPAY_USER}:${IZIPAY_PASSWORD}`).toString("base64");

  const headers = {
    "Content-Type": "application/json",
    Authorization: auth,
  };

  const response = await httpClient.post<PaymentResponse>(
    IZIPAY_URL_PAYMENT,
    body,
    { headers }
  );

  if (response.success) {
    return NextResponse.json(response.data);
  } else {
    return NextResponse.json(
      { error: "Payment request failed", details: response.data || null },
      { status: 500 }
    );
  }
}
