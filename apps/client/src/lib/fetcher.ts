function getToken(): string {
  // Replace this with your actual token fetching logic
  return window.sessionStorage.getItem('token') || '';
}

export const BackendUrl = (path: string) => {
  const url = new URL(import.meta.env.VITE_BACKEND_URL);
  url.pathname = path;
  return url;
}

export async function fetchWithToken(url: string | URL, options: RequestInit = {}): Promise<Response> {
  const token = getToken();

  const headers = new Headers(options.headers || {});
  headers.set('Authorization', `Bearer ${token}`);
  headers.set('Content-Type', 'application/json');

  const updatedOptions: RequestInit = {
    ...options,
    headers: headers
  };

  return fetch(url, updatedOptions);
}
