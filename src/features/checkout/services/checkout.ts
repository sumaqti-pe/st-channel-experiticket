import { httpClient } from "@/shared/utils/httpClient";
import { PaymentRequest, PaymentResponse } from "../types";

export const payment = (dto: PaymentRequest) => {
  return httpClient.post<PaymentResponse>("/api/payment", dto);
};
