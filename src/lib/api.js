const API_BASE_URL =  "https://crypto-app-rj3j.onrender.com";

async function request(path, options = {}) {
  const token = localStorage.getItem("auth_token");
  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const url = path.startsWith("http") ? path : `${API_BASE_URL}${path}`;
  let response;

  try {
    response = await fetch(url, {
      ...options,
      headers,
    });
  } catch (error) {
    throw new Error(error?.message || "Failed to connect to backend. Check your API URL and network.");
  }

  const body = await response.text();
  const data = body ? JSON.parse(body) : null;

  if (!response.ok) {
    const message = data?.message || data?.error || response.statusText || "Request failed";
    throw new Error(message);
  }

  return data;
}

export const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch("http://localhost:5000/upload-profile/USER_ID", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    // save globally (important for navbar reuse)
    localStorage.setItem("profileImage", data.profileImage);
  };

export async function signIn({ email, password }) {
  return request("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}

export async function signUp({ name, email, password }) {
  return request("/api/auth/register", {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
  });
}

export async function getUserProfile() {
  return request("/api/auth/me");
}

export async function updateUserProfile(profile) {
  return request("/api/auth/me", {
    method: "PUT",
    body: JSON.stringify(profile),
  });
}

export function saveAuthToken(token) {
  localStorage.setItem("auth_token", token);
}

export function clearAuthToken() {
  localStorage.removeItem("auth_token");
}

export async function getAllCrypto() {
  return request("/api/crypto");
}

export async function getGainers() {
  return request("/api/crypto/gainers");
}

export async function getNewListings() {
  return request("/api/crypto/new");
}

export async function addCrypto(data) {
  return request("/api/crypto", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
