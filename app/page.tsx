import Image from "next/image";
import React from "react";
import { getIRTime, getGreetingByTime } from "@/utils/GreetingComponent";
function page() {
  const { greeting, dayName, persianDate } = getIRTime();
  return (
    <div className="flex h-screen">
      <div className="w-full flex items-center justify-between gap-4 p-8">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="text-center space-y-2">
            <Image src="/next.svg" width={80} height={80} alt="icon" />
            <h1 className="text-lg font-bold">سامانه شکایات</h1>
          </div>
        ))}
      </div>

      <div className="relative w-1/2 h-full flex items-center justify-center">
        <Image
          src="/tarazu.jpg"
          alt="bg img"
          fill
          className="object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/50 z-[1]" />

        <div className="z-10 relative flex flex-col items-center  justify-around gap-8">
          <div>
            <Image
              src="/svgviewer-output.svg"
              width={180}
              height={180}
              alt="logo"
            />
            <p className="text-white text-center text-xl">www.136.ir</p>
          </div>
          <p className="text-white">
            {greeting} {dayName}، {persianDate}
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
