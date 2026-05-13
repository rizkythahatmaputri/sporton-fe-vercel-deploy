import OrderConfirmed from "../../components/order-status/order-confirmed";
import OrderSubmitted from "../../components/order-status/order-submitted";
import OrderRejected from "../../components/order-status/order-rejected";
import { getTransactionById } from "@/app/services/transaction.service";
import { TPageProps } from "../../product/[id]/page";

const OrderStatus = async ({ params }: TPageProps) => {
  const { id } = await params; //deconstruct id dari params yang dilempar dari router push di checkout/page.tsx setelah checkout berhasil, untuk ambil data transaksi berdasarkan id tadi, baru render kondisional sesuai status transaksi

  const transaction = await getTransactionById(id);
  console.log("transaction", transaction);

  return (
    <main className="bg-gray-100 min-h-[88vh] pt-20">
      {/* karena konten kita lebih kecil dari container, maka pakai max width supaya tidak terlalu melebar */}
      <div className="max-w-5xl mx-auto py-20">
        <h1 className="text-5xl font-bold text-center mb-10">Order Status</h1>
        {/* {isConfirmed ? <OrderConfirmed /> : <OrderSubmitted />} */}
        {transaction.status === "pending" && <OrderSubmitted />}
        {transaction.status === "paid" && <OrderConfirmed />}
        {transaction.status === "rejected" && <OrderRejected />}
      </div>
    </main>
  );
};

export default OrderStatus;
