"use client";

import Image from "next/image";
import { useGreetingByTime, useIRTime } from "@/utils/GreetingUtil";

const Sidebar = () => {
  const { dayName, persianDate } = useIRTime();
  const greeting = useGreetingByTime();

  return (
    <div className="relative lg:w-2/6 md:w-1/6 h-full items-center justify-center hidden lg:flex">
      <Image
        src="/tarazu.jpg"
        alt="تصویر پس‌زمینه ترازو و عدالت"
        fill
        className="object-cover z-0"
        priority
      />
      <div className="absolute inset-0 bg-black/50 z-[1]" />
      <div className="z-10 relative flex flex-col items-center justify-between p-4 text-white h-full">
        <div className="flex flex-col items-center justify-center flex-1">
          <Image
            src="/svgviewer-output.svg"
            width={180}
            height={180}
            alt="لوگوی سازمان بازرسی کل کشور"
          />
          <p className="text-center text-xl mt-2">www.136.ir</p>
        </div>
        <div className="text-center">
          <p>{greeting}</p>
          <p>
            {dayName}، {persianDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
