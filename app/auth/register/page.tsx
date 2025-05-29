"use client";
import { DatePicker, Form, Input } from "antd";
import React from "react";
import type { FormProps } from "antd";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { MaskedInput } from "antd-mask-input";
interface pageProps {}

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

const page: React.FC<pageProps> = (props) => {
  const isValidIranianNationalCode = (input) => {
    if (!/^\d{10}$/.test(input)) return false;
    const check = +input[9];
    const sum = input
      .split("")
      .slice(0, 9)
      .reduce((total, num, index) => total + +num * (10 - index), 0);
    const remainder = sum % 11;
    return (
      (remainder < 2 && check === remainder) ||
      (remainder >= 2 && check === 11 - remainder)
    );
  };

  return (
    <div className="px-8 py-6">
      <div className="flex justify-between items-center">
        <h1 className="my-4">ثبت نام</h1>
        <Link href="/auth/login">
          <Icon icon="solar:arrow-left-linear" width="24" height="24" />
        </Link>
      </div>
      <Form
        name="signUp"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="grid grid-cols-2 gap-6"
      >
        <Form.Item
          label="شماره موبایل"
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: "لطفاً شماره موبایل را وارد کنید!",
            },
            {
              pattern: /^09\d{9}$/,
              message: "شماره موبایل معتبر نیست!",
            },
          ]}
        >
          <MaskedInput
            mask="0000 000 00 00"
            size="large"
            maskOptions={{ lazy: true }}
            placeholder="0912 345 67 89"
            dir="ltr"
            style={{
              direction: "ltr",
              textAlign: "right",
              fontFamily: "IranYekan, sans-serif",
            }}
          />
        </Form.Item>
        <Form.Item
          name="nationalCode"
          label="کد ملی"
          rules={[
            { required: true, message: "لطفا کد ملی را وارد کنید" },
            { len: 10, message: "کد ملی باید دقیقا 10 رقم باشد" },
            {
              pattern: /^\d+$/,
              message: "فقط اعداد مجاز هستند",
            },
            {
              validator: (_, value) => {
                if (!value || isValidIranianNationalCode(value)) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("کد ملی معتبر نیست"));
              },
            },
          ]}
        >
          <Input
            minLength={10}
            maxLength={10}
            inputMode="numeric"
            pattern="[0-9]*"
            showCount
            onBeforeInput={(e) => {
              if (!/^\d*$/.test(e.data)) {
                e.preventDefault();
              }
            }}
            size="large"
          />
        </Form.Item>
        <Form.Item<FieldType>
          label="نام "
          name="name"
          size="large"
          rules={[{ required: true, message: "لطفا نام خود را وارد کنید" }]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item<FieldType>
          label=" نام خانوادگی"
          name="familyName"
          size="large"
          rules={[
            { required: true, message: "لطفا نام خانوادگی خود را وارد کنید" },
          ]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item<FieldType>
          name="fatherName"
          label=" نام پدر"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input size="large" />
        </Form.Item>

        <Form.Item
          name="birthDate"
          label="تاریخ تولد"
          rules={[{ required: true, message: "لطفا تاریخ تولد را وارد کنید" }]}
          getValueFromEvent={(e: any) => e?.toISOString()}
          getValueProps={(value: any) => ({
            value: value ? dayjs(value) : undefined,
          })}
        >
          <DatePicker
            className="w-full"
            size="large"
            format="YYYY-MM-DD"
            placeholder="تاریخ تولد "
          />
        </Form.Item>
        <div>
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
        <div className="col-span-2">
          <button className="w-full rounded-lg py-2 bg-sky-800 text-white hover:bg-sky-950 transition-all duration-200 cursor-pointer ">
            ثبت نام
          </button>
        </div>
      </Form>
    </div>
  );
};

export default page;
