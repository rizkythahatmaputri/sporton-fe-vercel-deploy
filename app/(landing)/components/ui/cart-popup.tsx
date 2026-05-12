import priceFormatter from "@/app/utils/price-formatter";
import Image from "next/image";
import Button from "./button";
import { FiTrash2, FiArrowRight } from "react-icons/fi";

import { useRouter } from "next/navigation";
import { useCartStore } from "@/app/hooks/use-cart-store";
import { getImageUrl } from "@/app/lib/api";

export const cartList = [
  {
    name: "SportOn Product 1",
    category: "Running",
    price: 450000,
    qty: 2,
    imageUrl: "shoes-1.svg",
  },
  {
    name: "SportOn Product 2",
    category: "Tennis",
    price: 250000,
    qty: 3,
    imageUrl: "racket-1.svg",
  },
  {
    name: "SportOn Product 3",
    category: "Running",
    price: 230000,
    qty: 5,
    imageUrl: "sportshirt-1.svg",
  },
  {
    name: "SportOn Product 4",
    category: "Football",
    price: 530000,
    qty: 5,
    imageUrl: "football-shoes-1.svg",
  },
];

const CartPopup = () => {
  const { push } = useRouter();
  const { items, removeItem } = useCartStore(); // render items dari cart store & remove (trash)

  const handleCheckout = () => {
    push("/checkout");
  };

  // pakai reduce dari javascript, hitung total harga di cartList
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.qty,
    0,
  );

  // kita perlu atur agar posisinya (muncul) ke bawah
  return (
    <div className="absolute bg-white right-0 top-12 shadow-xl shadow-black/10 border border-gray-200 w-90 z-10">
      {/* bagian header kotakannya */}
      <div className="p-4 border-b border-gray-200 font-bold text-center">
        Shopping Cart
      </div>

      {/* kita lakukan dynamic rendering */}
      {items.length ? (
        items.map((item, index) => (
          <div className="border-b border-gray-200 p-4 flex gap-3" key={index}>
            <div className="bg-primary-light aspect-square w-16 flex justify-center items-center">
              <Image
                src={getImageUrl(item.imageUrl)}
                alt={item.name}
                width={63}
                height={63}
                className="aspect-square object-contain"
              />
            </div>
            {/* title, quantity, harga, button delete */}
            <div className="self-center">
              <div className="text-sm font-medium">{item.name}</div>
              <div className="flex gap-3 font-medium text-xs">
                <div>{item.qty}x</div>
                <div className="text-primary">{priceFormatter(item.price)}</div>
              </div>
            </div>
            <Button
              size="small"
              variant="ghost"
              className="w-7 h-7 p-0! self-center ml-auto"
              onClick={() => removeItem(item._id)}
            >
              <FiTrash2 />
            </Button>
          </div>
        ))
      ) : (
        <div className="text-center opacity-50 py-5">
          Your shopping cart is empty
        </div>
      )}
      {/* bagian footer kotakannya */}
      <div className="border-t border-gray-200 p-4">
        <div className="flex justify-between font-semibold">
          <div className="text-sm">Total</div>
          <div className="text-primary text-xs">
            {priceFormatter(totalPrice)}
          </div>
        </div>
        <Button
          variant="dark"
          size="small"
          className="w-full mt-4"
          onClick={handleCheckout}
        >
          Checkout Now
          <FiArrowRight size={20} />
        </Button>
      </div>
    </div>
  );
};

export default CartPopup;
