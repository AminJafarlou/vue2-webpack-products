import { BASE_URL } from "./constants";

export async function getProducts(size, page, merchantIds) {
  const queryParams = new URLSearchParams({
    size: size.toString(),
    page: page.toString()
  });

  const fullUrl = `${BASE_URL}products?${queryParams.toString()}`;

  const response = await fetch(fullUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ merchantIds })
  });

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  return response.json();
}

export async function getProductsByCategoryId(
  size,
  page,
  categoryId,
  merchantIds
) {
  const queryParams = new URLSearchParams({
    size: size.toString(),
    page: page.toString()
  });

  const fullUrl = `${BASE_URL}products/${categoryId}/?${queryParams.toString()}`;

  const response = await fetch(fullUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ merchantIds })
  });

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  return response.json();
}
