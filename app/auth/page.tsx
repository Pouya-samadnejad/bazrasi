import { Form } from "antd";
import React from "react";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

function page() {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return;
  <Form
    name="login"
    layout="vertical"
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
    className="w-full max-w-md"
  ></Form>;
}

export default page;
