import { fetchAPI } from "../lib/api";
import { Transaction } from "../types";

// untuk checkout, nanti dipakai di page checkout
export const transactionCheckout = async (
  form: FormData,
): Promise<Transaction> => {
  return await fetchAPI<Transaction>("/transactions/checkout", {
    method: "POST",
    body: form,
  });
};

// untuk mengambil data transaksi berdasarkan id, nanti dipakai di page order status
export const getTransactionById = async (id: string): Promise<Transaction> => {
  return await fetchAPI<Transaction>(`/transactions/${id}`);
};
