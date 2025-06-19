const LOCAL_API_BASE = "http://localhost:8000/api";
const PROD_API_BASE = "https://p2p-lender-production.up.railway.app/api";

const API_BASE = window.location.hostname === "localhost"
  ? LOCAL_API_BASE
  : PROD_API_BASE;

export async function signup(username, email, password) {
  const res = await fetch(`${API_BASE}/signup/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  });
  return res.json();
}

export async function signin(username, password) {
  const res = await fetch(`${API_BASE}/signin/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  return res.json();
}

export async function logout(refresh) {
  const res = await fetch(`${API_BASE}/logout/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refresh }),
  });
  return res;
} 