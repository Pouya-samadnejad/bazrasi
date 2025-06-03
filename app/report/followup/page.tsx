"use client";
import { Form, Input } from "antd";
import React from "react";
import type { FormProps } from "antd";
import { Icon } from "@iconify/react";
import Link from "next/link";
import CaptchaField from "@/components/CaptchaField";

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
  title = "وضعیت گزارش فساد ناشناس",
  formName = "report folowup",
}) => {
  return (
    <div className="px-8 py-6">
      <div className="flex justify-between items-center">
        <h1 className="my-4">{title}</h1>
        <Link href="/">
          <Icon icon="solar:arrow-left-line-duotone" width="30" height="30" />
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
          name="nationalCode"
          label="شماره رهگیری"
          rules={[{ required: true, message: "کد رهگیری را وارد کنید" }]}
        >
          <Input
            maxLength={10}
            inputMode="numeric"
            pattern="[0-9]*"
            showCount
            size="large"
          />
        </Form.Item>
        <CaptchaField />

        <Form.Item>
          <button
            type="submit"
            className="w-full rounded-lg py-2 bg-sky-800 text-white hover:bg-sky-950 transition-all duration-200 cursor-pointer"
          >
            بررسی
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ForgetForm;
