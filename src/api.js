const API_URL = "http://BACKEND_PUBLIC_IP:8080";

export async function getOrders() {
  const res = await fetch(`${API_URL}/api/orders`);
  return res.json();
}