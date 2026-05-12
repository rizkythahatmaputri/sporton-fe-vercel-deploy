import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";

import { Category } from "@/app/types";
import { getImageUrl } from "@/app/lib/api";

//ini dynamic rendering, array berisi object
const categoryList = [
  {
    name: "Running",
    imageUrl: "category-running.svg",
  },
];

type TCategoriesProps = {
  // tipe datanya diambil dari interface Category yang ada di types/index.ts
  categories: Category[];
};

const CategoriesSection = ({ categories }: TCategoriesProps) => {
  return (
    <section
      id="category-section"
      className="container mx-auto px-10 md:px-20 pb-20 pt-20"
    >
      <div className="flex justify-between">
        <h2 className="font-bold text-2xl">Browse By Categories</h2>
        <Link href="#" className="flex gap-2 text-primary font-medium">
          <span className="self-center">See All Categories</span>
          <FiArrowRight className="self-center" />
        </Link>
      </div>
      {/* kita render disini */}
      <div className="grid grid-cols-6 gap-12 mt-8">
        {/* penggunaan dynamic rendering */}
        {categories.map((category) => (
          <div
            className="rounded-lg bg-gradient-to-r from-[#F1F1F1] to-[#F7F7F7] w-full aspect-square flex justify-center"
            key={category._id}
          >
            <div className="self-center">
              <Image
                src={getImageUrl(category.imageUrl)}
                className="mb-[10px]"
                width={86}
                height={86}
                alt={category.name}
              />
              <div className="text-primary font-medium text-xl text-center">
                {category.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
