// Ini adalah props, fungsinya untuk membuat komponen yang lebih fleksibel dan dapat digunakan kembali dengan berbagai konten yang berbeda.
// Dengan props, menghindari duplikasi kode dan membuat komponen yang lebih modular (pemecahan komponen jadi kecil agar bisa digunakan lagi)

type TCardWithHeaderProps = {
  title: string;
  children: React.ReactNode;
};

const CardWithHeader = ({ title, children }: TCardWithHeaderProps) => {
  return (
    <div className="bg-white">
      {/* Header Cart */}
      <div className="px-5 py-4 border border-gray-200">
        <h2 className="font-bold text-lg">{title}</h2>
      </div>
      {children}
      {/* children ini konten yang posisinya di bawah header,
      nah mengisi kontennya di cart-items.tsx, bukan disini karena ini komponen */}
    </div>
  );
};

export default CardWithHeader;

// komponen CardWithHeader ini dipakai di cart-items.tsx
