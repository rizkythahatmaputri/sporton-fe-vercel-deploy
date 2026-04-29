import Link from "next/link";
import Image from "next/image";
import {FiPlus} from "react-icons/fi";
import Button from "../ui/button";

const productList = [
    {
        name: "SportOn Product 1",
        category: "Running",
        price: 450000,
        imageUrl: "shoes-1.svg"
    },
    {
        name: "SportOn Product 2",
        category: "Tennis",
        price: 250000,
        imageUrl: "racket-1.svg"
    },
    {
        name: "SportOn Product 3",
        category: "Running",
        price: 230000,
        imageUrl: "sportshirt-1.svg"
    },
    {
        name: "SportOn Product 4",
        category: "Football",
        price: 440000,
        imageUrl: "football-shoes-1.svg"
    },
    {
        name: "SportOn Product 5",
        category: "Football",
        price: 550000,
        imageUrl: "football-shoes-2.svg"
    },
    {
        name: "SportOn Product 6",
        category: "Running",
        price: 650000,
        imageUrl: "sportshirt-2.svg"
    },
    {
        name: "SportOn Product 7",
        category: "Running",
        price: 650000,
        imageUrl: "shoes-2.svg"
    },
    {
        name: "SportOn Product 8",
        category: "Tennis",
        price: 650000,
        imageUrl: "racket-2.svg"
    },
];
   

const ProductsSection = () => {
    return (
        <section id="products-section" className="container mx-auto mt-32 md:px-20">
            <h2 className="font-bold italic text-4xl text-center mb-11">
                <span className="text-primary">OUR</span> PRODUCTS</h2>

            <div className="grid grid-cols-4 gap-5">
                {
                productList.map((product, index) => (
                    // buat card, yang akan mengarah ke product details
                    <Link href="#" key={index} className="p-1.5 bg-white hover:drop-shadow-xl duration-300">
                        <div className="bg-primary-light aspect-square w-full flex justify-center items-center relative">
                            <Image src={`/images/products/${product.imageUrl}`} alt={product.name} width={300} height={300}
                                className="aspect-square object-contain" />

                            <Button className="w-10 h-10 p-2! absolute right-4 top-3">
                                <FiPlus size={24}></FiPlus>
                            </Button>
                        </div>

                        <h3 className="font-medium text-lg mb-1.5 mt-4">{product.name}</h3>
                        <div className="flex justify-between mb-8">
                            <div className="text-gray-500">{product.category}</div>
                            <div className="font-medium text-primary">
                                {Intl.NumberFormat("id-ID", {
                                    style: "currency",
                                    currency: "IDR",
                                }).format(product.price)}
                            </div>
                        </div>

                    </Link>

                    
                ))}
            </div>
        </section>
    );
};

export default ProductsSection;
