// dibuat setelah bikin lib/api.ts
// untuk memakai function fetchAPI dengan tipe data Category (types/index.ts)

import { fetchAPI } from "../lib/api";
import { Category } from "../types";

export const getAllCategories = async (): Promise<Category[]> => {
  return await fetchAPI<Category[]>("/categories");

  // dibikin [arry of category] karena yang di type/index.ts itu single Category
};
