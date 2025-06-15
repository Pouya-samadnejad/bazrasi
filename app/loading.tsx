import Image from "next/image";
import React from "react";

export default function loading() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center bg-gray-200 h-screen">
      <Image
        src="/svgviewer-output.svg"
        width={200}
        height={200}
        alt="loading logo"
      />
      <span className="loader"></span>
    </div>
  );
}
