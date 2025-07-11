"use client";
import React from "react";
import type { FormProps } from "antd";
import { Form, Input } from "antd";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import CaptchaField from "@/components/CaptchaField";

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
  <div className="flex gap-5 lg:w-4xl ">
    <div className="bg-white lg:flex flex-col justify-center items-center 2xl:gap-4 rounded-r-lg px-20 hidden">
      <Image src="/blue-logo.svg" width={280} height={280} alt="blue logo" />
      <div className="text-center text-sm ">
        <p>درگاه سامانه های یک پارچه</p>
        <p>سارمانه بازرسی کل کشور</p>
      </div>
      <Link href="/" className="text-left" dir="ltr">
        136.ir
      </Link>
    </div>
    <div className=" px-20 py-10 my-8 w-full">
      <div className="flex justify-between items-center">
        <h2 className="text-xl mb-5 font-bold">ورود</h2>
        <Link href="/">
          <Icon icon="solar:arrow-left-line-duotone" width="24" height="24" />
        </Link>
      </div>
      <div>
        <Form
          name="logIn"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="w-full"
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
          <div className="col-span-2">
            <CaptchaField />
          </div>
          <Form.Item>
            <button className="w-full rounded-lg py-2 bg-sky-800 text-white hover:bg-sky-950 transition-all duration-200 cursor-pointer ">
              ورود
            </button>
          </Form.Item>
          <Link
            href="/auth/register"
            className="!block !text-center !rounded-lg py-2 !bg-white !border-1 !border-gray-300 hover:!border-black !text-stone-600 hover:!text-black !transition-all !duration-200 !cursor-pointer "
          >
            ثبت نام شهروند
          </Link>
          <div className="flex items-center justify-center gap-4 my-2">
            <Link className="text-black underline" href="/auth/forget">
              <span className="text-black underline">فراموشی رمز عبور</span>
            </Link>

            <Link className="text-black" href="/auth/changeNumber">
              <span className="text-black underline"> تغییر شماره همراه </span>
            </Link>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="bg-stone-700 h-[1px] grow"></div>
              <h2 className="font-bold text-sm text-stone-700">ورود از طریق</h2>
              <div className="bg-stone-700 h-[1px] grow"></div>
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
