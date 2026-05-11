// cart items kanannnya formulir, nanti dipanggil di checkout/page.tsx sebagai komponen CartItems
"use client";

import { cartList } from "../ui/cart-popup";
import Button from "../ui/button";
import Image from "next/image";
import { FiTrash2, FiCreditCard } from "react-icons/fi";
import priceFormatter from "@/app/utils/price-formatter";
import CardWithHeader from "../ui/card-with-header";
import { useRouter } from "next/navigation";

const CartItems = () => {
  const { push } = useRouter();

  // pakai reduce dari javascript, hitung total harga di cartList
  const totalPrice = cartList.reduce(
    (total, item) => total + item.price * item.qty,
    0,
  );

  const payment = () => {};

  return (
    <CardWithHeader title="Cart Items">
      {/* kita kasih scroll dengan menambahkan max tingginya */}
      <div className="overflow-auto max-h-[300px]">
        {/* kita lakukan dynamic rendering */}
        {cartList.map((item, index) => (
          <div className="border-b border-gray-200 p-4 flex gap-3" key={index}>
            <div className="bg-primary-light aspect-square w-16 flex justify-center items-center">
              <Image
                src={`/images/products/${item.imageUrl}`}
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
            >
              <FiTrash2 />
            </Button>
          </div>
        ))}
      </div>
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
          className="w-full mt-4"
          onClick={() => push("/payment")}
        >
          <FiCreditCard size={20} />
          Proceed to Payment
        </Button>
      </div>
    </CardWithHeader>
  );
};

export default CartItems;
