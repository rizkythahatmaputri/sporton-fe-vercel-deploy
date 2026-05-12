// ini akan dipanggil di hero/product tombol + untuk masukin ke cart

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "../types";

export interface CartItem extends Product {
  qty: number;
}

export interface CustomerInfo {
  customerName: string;
  customerContact: number | null;
  customerAddress: string;
}

interface CartStore {
  customerInfo: CustomerInfo | null;
  items: CartItem[];
  setCustomerInfo: (info: CustomerInfo) => void;
  addItem: (product: Product, qty?: number) => void;
  removeItem: (productId: string) => void;
  reset: () => void;
}

export const useCartStore = create<CartStore>()(
  // persistant=untuk membuat usestate kalo direfresh datanya tidak hilang, karena disimpan di local storage browser
  persist(
    (set, get) => ({
      customerInfo: null,
      items: [],
      setCustomerInfo: (info) => {
        set({ customerInfo: info });
      },
      addItem: (product, qty = 1) => {
        const items = get().items;
        const existingItem = items.find((item) => item._id === product._id); //1. apakah di dalam cart (state items:[]) ada product._id yang sama dengan yang ada di addItem?

        if (existingItem) {
          //2. jika ada, maka update qty dengan menambahkan qty baru ke qty lama
          set({
            items: items.map((item) =>
              item._id === product._id
                ? { ...item, qty: item.qty + qty }
                : item,
            ),
          });
        } else {
          set({ items: [...items, { ...product, qty }] }); //3. kalo gaada berarti product baru
        }
      },
      removeItem: (productId) => {
        set({ items: get().items.filter((item) => item._id !== productId) });
      },
      reset: () => {
        set({ items: [], customerInfo: null });
      },
    }),
    {
      name: "cart-storage",
    },
  ),
);
