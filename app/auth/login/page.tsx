"use client";
import React from "react";
import type { FormProps } from "antd";
import { Form, Input } from "antd";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const App: React.FC = () => (
  <div className="flex gap-5 ">
    <div className="bg-white lg:flex flex-col justify-center items-center gap-4 rounded-r-lg py-22 px-20 hidden">
      <Image src="/blue-logo.svg" width={280} height={280} alt="blue logo" />
      <div className="text-center text-sm ">
        <p>درگاه سامانه های یک پارچه</p>
        <p>سارمانه بازرسی کل کشور</p>
      </div>
      <p className="text-center">136.ir</p>
    </div>
    <div className="px-10 my-15 w-full">
      <h2 className="text-xl px-15 mb-5 font-bold">ورود</h2>
      <div className="flex-1 flex flex-col justify-center items-center ">
        <Form
          name="logIn"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="w-full max-w-md"
        >
          <Form.Item
            name="nationalCode"
            label="کد ملی"
            rules={[
              { required: true, message: "لطفا کد ملی را وارد کنید" },
              { len: 10, message: "کد ملی باید دقیقا 10 رقم باشد" },
              { pattern: /^\d+$/, message: "فقط اعداد مجاز هستند" },
            ]}
          >
            <Input
              minLength={10}
              maxLength={10}
              inputMode="numeric"
              pattern="[0-9]*"
              prefix={
                <Icon icon="solar:user-bold-duotone" width="24" height="24" />
              }
              size="large"
              onBeforeInput={(e) => {
                if (!/^\d*$/.test(e.data ?? "")) e.preventDefault();
              }}
            />
          </Form.Item>

          <Form.Item
            name="password"
            label="رمز عبور"
            rules={[
              { required: true, message: "لطفاً رمز عبور را وارد کنید" },
              {
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/,
                message:
                  "رمز عبور باید حداقل ۸ کاراکتر، شامل حروف بزرگ، کوچک و نماد باشد",
              },
            ]}
            hasFeedback={false}
          >
            <Input.Password
              prefix={
                <Icon
                  icon="solar:lock-keyhole-minimalistic-bold-duotone"
                  width="24"
                  height="24"
                />
              }
              placeholder="رمز عبور را وارد کنید"
              size="large"
              iconRender={(visible) =>
                visible ? (
                  <Icon icon="solar:eye-bold-duotone" width="24" height="24" />
                ) : (
                  <Icon
                    icon="solar:eye-closed-line-duotone"
                    width="24"
                    height="24"
                  />
                )
              }
            />
          </Form.Item>
          <div className="grid grid-cols-2">
            <Form.Item name="securityCode" label="کد امنیتی">
              <Input
                inputMode="numeric"
                pattern="[0-9]*"
                size="large"
                onBeforeInput={(e) => {
                  if (!/^\d*$/.test(e.data ?? "")) e.preventDefault();
                }}
              />
            </Form.Item>
          </div>

          <Form.Item>
            <button className="w-full rounded-lg py-2 bg-sky-800 text-white hover:bg-sky-950 transition-all duration-200 cursor-pointer ">
              ورود
            </button>
          </Form.Item>
          <button className="w-full rounded-lg py-2 bg-white border-1 border-gray-300 hover:border-black text-gray-400 hover:text-black transition-all duration-200 cursor-pointer ">
            ثبت نام شهروند
          </button>
          <div className="flex items-center justify-center gap-4 my-2">
            <Link className="text-black underline" href="/">
              <span className="text-black underline">فراموشی رمز عبور</span>
            </Link>

            <Link className="text-black" href="/">
              <span className="text-black underline"> تغییر شماره همراه </span>
            </Link>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="bg-gray-200 h-[1px] grow"></div>
              <h2 className="font-bold text-sm text-gray-300">ورود از طریق</h2>
              <div className="bg-gray-200 h-[1px] grow"></div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-6">
            <Link
              href="/"
              className="flex items-center justify-center !bg-white !text-black !border-gray-300 rounded-md px-3 py-1.5 gap-1 text-[12px]"
            >
              <Image
                src="/dolatMan.png"
                width={20}
                height={20}
                alt="dowlat man logo"
              />
              دولت من
            </Link>
            <Link
              href="/"
              className="flex items-center justify-center !bg-white !text-black !border-gray-300 rounded-md px-3 py-1.5 gap-1 text-[12px]"
            >
              <Image
                src="/sanalogo.png"
                width={16}
                height={16}
                alt="dowlat man logo"
              />
              ثنا قوه قضاییه
            </Link>
          </div>
        </Form>
      </div>
    </div>
  </div>
);

export default App;
