// opsi pembayaran kartu sebelah kiri
// pakai props cardwithheader juga

import { FiCreditCard } from "react-icons/fi";
import CardWithHeader from "../ui/card-with-header";

const paymentList = [
  {
    bank_name: "BCA",
    account_number: 123123123,
    account_holder: "PT SportOn Digital",
  },
  {
    bank_name: "Mandiri",
    account_number: 456456456,
    account_holder: "PT SportOn Digital",
  },
  {
    bank_name: "BNI",
    account_number: 789789789,
    account_holder: "PT SportOn Digital",
  },
];

const PaymentOptions = () => {
  return (
    <CardWithHeader title="Payment Options">
      {/* children konten, render dari paymentList*/}

      {paymentList.map((payment, index) => (
        <div className="flex gap-5 p-5 border-b border-gray-100" key={index}>
          <div className="bg-blue-100 p-4 text-blue-500 h-fit self-center">
            <FiCreditCard size={24} />
          </div>
          {/* bungkus div lagi karena tadi flex jadi di kanannya */}
          <div className="self-center">
            <div className="font-bold">{payment.bank_name}</div>
            <div className="text-sm">{payment.account_number}</div>
            <div className="text-sm opacity-70">{payment.account_holder}</div>
          </div>
          <div className="ml-auto bg-blue-50 text-gray-800 text-xs h-fit self-center px-2 py-1">
            Bank Transfer
          </div>
        </div>
      ))}
    </CardWithHeader>
  );
};

export default PaymentOptions;
