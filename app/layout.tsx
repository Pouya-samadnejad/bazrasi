import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  return (
    <html lang="fa" dir="rtl">
      <body className={`${iranyekan.className} antialiased`}>{children}</body>
    </html>
  );
}
