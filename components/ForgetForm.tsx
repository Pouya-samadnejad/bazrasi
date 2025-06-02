"use client";
import { Form, Input } from "antd";
import React from "react";
import type { FormProps } from "antd";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { MaskedInput } from "antd-mask-input";
import CaptchaField from "./CaptchaField";

interface pageProps {
  title?: string;
  formName?: string;
}

type FieldType = {
  phoneNumber?: string;
  nationalCode?: string;
  securityCode?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const ForgetForm: React.FC<pageProps> = ({
  title = "بازیابی رمز",
  formName = "forget-form",
}) => {
  const isValidIranianNationalCode = (input: string): boolean => {
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
        <h1 className="my-4">{title}</h1>
        <Link href="/auth/login">
          <Icon icon="solar:arrow-left-linear" width="24" height="24" />
        </Link>
      </div>

      <Form
        name={formName}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="شماره موبایل"
          name="phoneNumber"
          rules={[
            { required: true, message: "لطفاً شماره موبایل را وارد کنید!" },
            { pattern: /^09\d{9}$/, message: "شماره موبایل معتبر نیست!" },
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
              validator: (_, value) => {
                if (!value || isValidIranianNationalCode(value)) {
                  return Promise.resolve();
                }
                return Promise.reject("کد ملی معتبر نیست");
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
            size="large"
            onBeforeInput={(e) => {
              if (e.data && !/^\d*$/.test(e.data)) {
                e.preventDefault();
              }
            }}
          />
        </Form.Item>
        <CaptchaField />

        <Form.Item>
          <button
            type="submit"
            className="w-full rounded-lg py-2 bg-sky-800 text-white hover:bg-sky-950 transition-all duration-200 cursor-pointer"
          >
            ثبت نام
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ForgetForm;
