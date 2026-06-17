const API_URL = "http://18.209.22.39:8080";

export async function getOrders() {
  const res = await fetch(`${API_URL}/api/orders`);
  return res.json();
}