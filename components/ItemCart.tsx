import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ItemCart({ link, title, img, mode = "grid" }) {
  const isExternal = link.startsWith("http://") || link.startsWith("https://");

  const LinkWrapper = ({ children }: { children: React.ReactNode }) =>
    isExternal ? (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ) : (
      <Link href={link}>{children}</Link>
    );
  if (mode === "wide") {
    return (
      <LinkWrapper>
        <div className="group flex items-center w-[342px] gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
          <div>
            <Image
              src={img}
              width={64}
              height={64}
              alt="item image"
              className="rounded-lg"
            />
          </div>
          <div className="flex-grow text-right">
            <h3 className="text-balance font-medium text-gray-800 leading-relaxed">
              {title}
            </h3>
          </div>
          <div>
            <Icon
              icon="solar:arrow-left-linear"
              width="24"
              height="24"
              className="text-gray-600 transition-transform duration-300 group-hover:-translate-x-1"
            />
          </div>
        </div>
      </LinkWrapper>
    );
  }

  return (
    <LinkWrapper>
      <div className="group relative flex flex-col items-center justify-center h-48 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
        <div className="absolute top-4 right-4">
          <Image
            src={img}
            width={42}
            height={42}
            alt="item image"
            className="rounded-lg"
          />
        </div>
        <div className="flex h-full w-full items-center justify-center">
          <h3 className="text-right text-balance font-medium text-gray-800 leading-relaxed ">
            {title}
          </h3>
        </div>
        <div className="absolute bottom-4 left-4">
          <Icon
            icon="solar:arrow-left-linear"
            width="24"
            height="24"
            className="text-gray-600 transition-transform duration-300 group-hover:-translate-x-1"
          />
        </div>
      </div>
    </LinkWrapper>
  );
}

export default ItemCart;
