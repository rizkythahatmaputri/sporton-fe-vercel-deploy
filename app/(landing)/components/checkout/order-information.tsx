// formulir kiri, nanti dipanggil di checkout/page.tsx sebagai komponen OrderInformation

import CardWithHeader from "../ui/card-with-header";

const OrderInformation = () => {
  return (
    <CardWithHeader title="Order Information">
      <div className="p-5">
        {/* ini children dari props cardwithheader komponen */}
        {/* Wrapping masing-masing field */}
        <div className="input-group">
          <label htmlFor="full_name">Full Name</label>
          <input type="text" placeholder="Type your full name" id="full_name" />
        </div>
        <div className="input-group">
          <label htmlFor="whatsapp_number">WhatsApp Number</label>
          <input type="text" placeholder="+62xxxx" id="whatsapp_number" />
        </div>
        <div className="input-group">
          <label htmlFor="shipping_address">Shipping Address</label>
          <textarea
            placeholder="Example Street, 18, West Jakarta, Indonesia, 66521"
            id="shipping_address"
            rows={7}
          />
        </div>
      </div>
    </CardWithHeader>
  );
};

export default OrderInformation;
