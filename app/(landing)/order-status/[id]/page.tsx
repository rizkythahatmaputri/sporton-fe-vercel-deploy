"use client";
import OrderConfirmed from "../../components/order-status/order-confirmed";
import OrderSubmitted from "../../components/order-status/order-submitted";

import { useState } from "react";

const OrderStatus = () => {
  //kondisional order status, pake use state
  const [isConfirmed, setIsConfirmed] = useState(false);

  return (
    <main className="bg-gray-100 min-h-[88vh]">
      {/* karena konten kita lebih kecil dari container, maka pakai max width supaya tidak terlalu melebar */}
      <div className="max-w-5xl mx-auto py-20">
        <h1 className="text-5xl font-bold text-center mb-10">Order Status</h1>
        {isConfirmed ? <OrderConfirmed /> : <OrderSubmitted />}
      </div>
    </main>
  );
};

export default OrderStatus;
