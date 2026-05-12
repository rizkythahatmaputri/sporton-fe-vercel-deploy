// dibuat setelah bikin lib/api.ts
// untuk memakai function fetchAPI dengan tipe data Category (types/index.ts)

import { fetchAPI } from "../lib/api";
import { Product } from "../types";

export const getAllProducts = async (): Promise<Product[]> => {
  return await fetchAPI<Product[]>("/products");
};
// dibikin [arry of category] karena yang di type/index.ts itu single Category

export const getProductDetail = async (id: string): Promise<Product> => {
  return await fetchAPI<Product>(`/products/${id}`);
};
// karena kita hanya mengambil satu product berdasarkan id nya, maka kita tidak perlu bikin array of product
