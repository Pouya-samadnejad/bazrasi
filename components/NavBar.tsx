import React from "react";
import Link from "next/link";
import Image from "next/image";
import { UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Avatar, Dropdown } from "antd";

export default function NavBar() {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          ثبت‌نام شهروند
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          ورود به حساب
        </Link>
      ),
    },
  ];
  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center">
        <Image
          src="/LogoDargah.png"
          width={40}
          height={40}
          alt="logo of the 136 for mobile"
          className="xl:hidden"
        />
        <p className="text-base md:text-lg font-semibold text-center hidden md:block text-white mb-4 md:mb-0">
          درگاه سامانه‌های یکپارچه سازمان بازرسی کل کشور
        </p>
        <p className="md:hidden text-white">درگاه سامانه‌های یکپارچه</p>
      </div>
      <div className="lg:flex md:justify-center gap-2 md:gap-4 text-xs md:text-sm hidden">
        <Link
          href="/auth/register"
          className="bg-[#184f90] hover:bg-[#17457e] transition-all duration-200 px-3 py-2 md:px-4 rounded-full text-white"
        >
          ثبت‌نام شهروند
        </Link>
        <Link
          href="/auth/login"
          className="bg-[#17a2b8] hover:bg-[#128192] transition-all duration-200 px-3 py-2 md:px-4 rounded-full text-white"
        >
          ورود به حساب
        </Link>
      </div>
      <div className="lg:hidden">
        <Dropdown
          menu={{ items }}
          placement="bottomLeft"
          trigger={["click"]}
          arrow
        >
          <button>
            <Avatar size="large" icon={<UserOutlined />} />
          </button>
        </Dropdown>
      </div>
    </nav>
  );
}
