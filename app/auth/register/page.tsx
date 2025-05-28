"use client";
import { DatePicker, Form, Input } from "antd";
import React from "react";
import type { FormProps } from "antd";

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
    <div className="px-8 py-12">
      <h1 className="my-4">ثبت نام</h1>
      <Form
        name="signUp"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="grid grid-cols-2 gap-6 text-[10px]"
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
          <Input mask="0999 999 99 99" maskChar={null}>
            {(inputProps) => <Input {...inputProps} size="large" />}
          </Input>
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
          label=" نام خانوادگی"
          name="familyName"
          size="large"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item<FieldType>
          name="phoneNumber"
          label="شماره موبایل"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item<FieldType>
          label="شماره موبایل"
          name="phoneNumber"
          size="large"
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
      </Form>
    </div>
  );
};

export default page;
