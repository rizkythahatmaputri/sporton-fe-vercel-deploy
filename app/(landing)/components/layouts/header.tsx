import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiShoppingBag } from "react-icons/fi";

const Header = () => {
    return (
    <header>
        <div className="flex justify-between gap-10 container mx-auto px-4 md:px-10 py-7">
            <Image
                src="/images/logo.svg"
                alt="sporton logo"
                width={127}
                height={30} />
        
            <nav className="flex gap-44 font-medium"> 
                <Link href="#" className="relative after:content-[''] after:block after:bg-primary after:rounded-full after:h-[3px] after:w-1/2 after:absolute after:left-1/2 after:-translate-x-1/2 after:translate-y-1">Home</Link>
                <Link href="#">Category</Link>
                <Link href="#">Explore Products</Link>        
            </nav>
            <div className="flex gap-10">
            <FiSearch size={25}/> 
            <div className="relative">  
                <FiShoppingBag size={25}/>   
                <div className="bg-primary rounded-full w-4.5 h-4.5 absolute -top-1 -right-1 flex items-center justify-center">
                   <span className="text-white ">3</span> 
                    </div>
            </div>
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