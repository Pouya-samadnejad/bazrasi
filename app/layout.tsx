import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import theme from "@/theme/themeConfig";
import { Providers } from "./providers";

export const iranyekan = localFont({
  src: [
    {
      path: "../public/fonts/IRANYekanXFaNum-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/IRANYekanXFaNum-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/IRANYekanXFaNum-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "درگاه سامانه‌های یکپارچه",
  description: "پورتال سازمان بازرسی کل کشور",
  themeColor: "#000000",
  manifest: "/manifest.json",
  icons: {
    icon: "/icons/dolatMan.png",
    apple: "/icons/dolatMan.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${iranyekan.className} antialiased`}>
        <ConfigProvider theme={theme}>
          <AntdRegistry>
            <Providers>{children}</Providers>
          </AntdRegistry>
        </ConfigProvider>
      </body>
    </html>
  );
}
