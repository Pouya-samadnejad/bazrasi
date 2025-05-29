import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ItemCart({ link, title }) {
  return (
    <Link href={link} className="w-full sm:w-42 md:w-48 lg:w-56 xl:w-50">
      <div className="group relative flex flex-col items-center justify-center h-48 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
        <div className="absolute top-4 right-4">
          <Image src="/justic.png" width={32} height={32} alt="item image" />
        </div>

        <div className="flex h-full w-full items-center justify-center">
          <h3 className="text-right text-base md:text-lg font-medium text-gray-800 leading-relaxed px-2">
            {title}
          </h3>
        </div>
        <div className="absolute bottom-4 left-4">
          <Icon
            icon="solar:arrow-left-linear"
            width="24"
            height="24"
            className=" text-gray-600 transition-transform duration-300 group-hover:-translate-x-1"
          />
        </div>
      </div>
    </Link>
  );
}

export default ItemCart;
