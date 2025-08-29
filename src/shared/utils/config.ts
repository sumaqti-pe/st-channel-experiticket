export const config = () => {
  const IZIPAY_USER = process.env.NEXT_PUBLIC_IZIPAY_USER || "";
  const IZIPAY_PASSWORD = process.env.NEXT_PUBLIC_IZIPAY_PASSWORD || "";
  const IZIPAY_PUBLIC_KEY = process.env.NEXT_PUBLIC_IZIPAY_PUBLIC_KEY || "";
  const IZIPAY_HMACSHA256 = process.env.NEXT_PUBLIC_IZIPAY_HMACSHA256 || "";
  const IZIPAY_URL_PAYMENT = process.env.NEXT_PUBLIC_IZIPAY_URL_PAYMENT || "";

  return {
    IZIPAY_USER,
    IZIPAY_PASSWORD,
    IZIPAY_PUBLIC_KEY,
    IZIPAY_HMACSHA256,
    IZIPAY_URL_PAYMENT,
  };
};
