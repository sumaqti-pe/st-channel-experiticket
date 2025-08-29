type ApiResponse<T> = {
  success: boolean;
  data: T | null;
  error: any;
};

async function request<T>(url: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
  try {
    const res = await fetch(url, {
      headers: { "Content-Type": "application/json", ...(options.headers || {}) },
      ...options,
    });

    const data = await res.json();

    if (!res.ok || data.success === false) {
      return { success: false, error: data.error || data, data: null };
    }

    return { success: true, data, error: null };
  } catch (err: any) {
    return { success: false, data: null, error: err.message || "Unexpected error" };
  }
}

export const httpClient = {
  get: <T>(url: string, options: RequestInit = {}) =>
    request<T>(url, { ...options, method: "GET" }),

  post: <T>(url: string, body?: any, options: RequestInit = {}) =>
    request<T>(url, {
      ...options,
      method: "POST",
      body: body ? JSON.stringify(body) : undefined,
    }),

  put: <T>(url: string, body?: any, options: RequestInit = {}) =>
    request<T>(url, {
      ...options,
      method: "PUT",
      body: body ? JSON.stringify(body) : undefined,
    }),

  delete: <T>(url: string, options: RequestInit = {}) =>
    request<T>(url, { ...options, method: "DELETE" }),
};