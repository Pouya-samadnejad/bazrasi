import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { useGreetingByTime, useIRTime } from "@/utils/GreetingUtil";

export const iranyekan = localFont({
  src: [
    {
      path: "./fonts/IRANYekanXFaNum-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/IRANYekanXFaNum-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/IRANYekanXFaNum-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-iranyekan",
  display: "swap",
});

export const metadata: Metadata = {
  title: "درگاه سامانه‌های یکپارچه",
  description: "پورتال سازمان بازرسی کل کشور",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { dayName, persianDate } = useIRTime();
  const greeting = useGreetingByTime();
  return (
    <html lang="fa" dir="rtl">
      <body className={`${iranyekan.className} antialiased`}>
        <div className="relative w-full h-screen overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="w-full h-1/2 bg-[#00375c]" />
            <div className="w-full h-1/2 relative">
              <Image
                src="/dargahImg.svg"
                alt="پس زمینه درگاه"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col h-full items-center justify-center">
            <div className="w-4/5 md:w-4/5 flex justify-between items-center text-white mb-3 px-2 md:px-0">
              <p className="text-base md:text-lg font-semibold">
                درگاه سامانه‌های یکپارچه سازمان بازرسی کل کشور
              </p>
              <div className="flex gap-2 md:gap-4 text-xs md:text-sm">
                <Link
                  href="/register"
                  className="bg-[#184f90] hover:bg-[#17457e] transition-all duration-200 px-3 py-2 md:px-4 rounded-full"
                >
                  ثبت‌نام شهروند
                </Link>
                <Link
                  href="/login"
                  className="bg-[#17a2b8] hover:bg-[#128192] transition-all duration-200 px-3 py-2 md:px-4 rounded-full"
                >
                  ورود به حساب
                </Link>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-md  md:w-4/5 h-[90%] overflow-hidden">
              <div className="flex h-full">
                <div className="w-full h-full overflow-y-auto p-6">
                  {children}
                </div>
                <div className="relative w-2/5 h-full flex items-center justify-center">
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
                        {dayName}
                        {persianDate}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
