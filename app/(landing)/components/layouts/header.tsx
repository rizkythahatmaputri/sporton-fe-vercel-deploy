"use client";

import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import CartPopup from "../ui/cart-popup";
import { useState } from "react";
import { useCartStore } from "@/app/hooks/use-cart-store";

const Header = () => {
  // kita set klik di icon shopping bag, maka akan muncul cart popup (komponen yang sudah kita buat di ui/cart-popup.tsx)
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { items } = useCartStore();

  return (
    <header className="fixed w-full z-20 backdrop-blur-xl bg-white/50">
      <div className="flex justify-between gap-10 container mx-auto px-4 md:px-10 py-7">
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="sporton logo"
            width={127}
            height={30}
          />
        </Link>

        <nav className="flex gap-44 font-medium">
          <Link
            href="#"
            className="relative after:content-[''] after:block after:bg-primary after:rounded-full after:h-[3px] after:w-1/2 after:absolute after:left-1/2 after:-translate-x-1/2 after:translate-y-1"
          >
            Home
          </Link>
          <Link href="#">Category</Link>
          <Link href="#">Explore Products</Link>
        </nav>
        <div className="relative flex gap-10 cursor-pointer">
          <FiSearch size={25} />
          <button
            className="relative cursor-pointer"
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            <FiShoppingBag size={25} />
            {items.length ? (
              <div className="bg-primary rounded-full w-4.5 h-4.5 absolute -top-1 -right-1 flex items-center justify-center text-white">
                {items.length}
              </div>
            ) : (
              <></>
            )}
          </button>
          {/* kita kasih relative agar posisinya mengikuti posisi dari wrapper (div pembungkus terdekat) */}
          {/* <CartPopup /> */}
          {/* kita buat state untuk mengatur apakah cart popup muncul atau tidak */}
          {isCartOpen && <CartPopup />}
        </div>
      </div>
    </header>
  );
};

export default Header;

// komponen Header ini (yang ada di dalam components\layout)
// kita import ke layouts.tsx supaya bisa dipakai di semua halaman yang ada di dalam layouts ini, termasuk page.tsx

// konsep parent dan child
// layouts.tsx => parent
// page.tsx => child
// header => komponen yang dipanggil di dalam parent (layouts) sehingga bisa dipakai di semua child (page.tsx)
