export interface PaymentRequest {
  amount: number;
  currency: string;
  orderId: string;
  customer: {
    email: string;
    billingDetails: {
      firstName: string;
      lastName: string;
      phoneNumber: string;
      identityType: string;
      identityCode: string;
      address: string;
      country: string;
      city: string;
      state: string;
      zipCode: string;
    };
  };
}

export interface PaymentResponse {
  webService: string;
  version: string;
  applicationVersion: string;
  status: string;
  answer: {
    formToken: string;
  };
  ticket: string;
  serverDate: string;
  applicationProvider: string;
  metadata: null;
  mode: string;
  serverUrl: string;
}
