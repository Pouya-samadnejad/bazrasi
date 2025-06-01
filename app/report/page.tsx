"use client";
import React, { useState } from "react";
import {
  Form,
  Select,
  Input,
  Upload,
  Button,
  Progress,
  Row,
  Col,
  message,
  Typography,
} from "antd";
import { FilePdfOutlined, FileImageOutlined } from "@ant-design/icons";
import { Icon } from "@iconify/react/dist/iconify.js";

const { Option } = Select;
const { TextArea } = Input;
const { Dragger } = Upload;
const { Paragraph } = Typography;

const inputSize = "large";

const CorruptionReportForm = () => {
  const [form] = Form.useForm();
  const [description, setDescription] = useState("");

  const maxChars = 4000;

  const handleDescriptionChange = (e: any) => {
    setDescription(e.target.value);
  };

  const props = {
    name: "file",
    multiple: true,
    accept: ".pdf,.jpg,.jpeg,.png",
    beforeUpload: (file: File) => {
      const isValidType =
        file.type === "application/pdf" || file.type.startsWith("image/");
      if (!isValidType) {
        message.error(`${file.name} فرمت مجاز نیست`);
      }
      return isValidType || Upload.LIST_IGNORE;
    },
    showUploadList: {
      showDownloadIcon: false,
      showRemoveIcon: true,
    },
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">
        ثبت گزارش فساد ناشناس
      </h2>
      <Form layout="vertical" form={form}>
        <Row gutter={16}>
          <Col xs={24}>
            <Form.Item label="موضوع">
              <Select placeholder="انتخاب موضوع" size={inputSize}>
                <Option value="مالی">مالی</Option>
                <Option value="اداری">اداری</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item label="دستگاه اجرایی">
              <Select placeholder="انتخاب دستگاه اجرایی" size={inputSize}>
                <Option value="وزارت A">وزارت A</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item label="موضوع تخصصی">
              <Select placeholder="انتخاب موضوع تخصصی" size={inputSize}>
                <Option value="قرارداد">قرارداد</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item label="نوع گزارش">
              <Select placeholder="انتخاب نوع گزارش" size={inputSize}>
                <Option value="مستند">مستند</Option>
                <Option value="تحلیلی">تحلیلی</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item label="فوریت رسیدگی">
              <Select placeholder="انتخاب فوریت" size={inputSize}>
                <Option value="فوری">فوری</Option>
                <Option value="عادی">عادی</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item label="برآورد ارزش فساد">
              <Select placeholder="انتخاب ارزش" size={inputSize}>
                <Option value="کمتر از ۱۰ میلیون">کمتر از ۱۰ میلیون</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item label="محدوده جغرافیایی تأثیر">
              <Select placeholder="انتخاب محدوده" size={inputSize}>
                <Option value="ملی">ملی</Option>
                <Option value="استانی">استانی</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={24}>
            <Form.Item label="سازمان‌های مشارکت‌کننده در فساد">
              <Select
                mode="tags"
                placeholder="سازمان‌ها را وارد کنید"
                size={inputSize}
              ></Select>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item label="شرح فساد">
          <TextArea
            rows={6}
            maxLength={maxChars}
            onChange={handleDescriptionChange}
            value={description}
            placeholder="شرح فساد را وارد کنید (حداکثر ۴۰۰۰ کاراکتر)"
            size={inputSize}
          />
          <div className="mt-1">
            <Progress
              percent={Math.min((description.length / maxChars) * 100, 100)}
              showInfo={false}
              status={description.length > maxChars ? "exception" : "normal"}
            />
            <div className="text-sm text-gray-500 text-right">
              {description.length} / {maxChars} کاراکتر
            </div>
          </div>
        </Form.Item>

        <Form.Item label="پیوست اسناد (عکس یا PDF)">
          <Paragraph type="secondary" className="mb-2 text-sm">
            تنها فایل‌های تصویری و PDF قابل بارگذاری هستند. حداکثر حجم هر فایل ۵
            مگابایت.
          </Paragraph>
          <Dragger {...props}>
            <div className="flex justify-center">
              <Icon
                icon="solar:cloud-upload-line-duotone"
                width="100"
                height="100"
              />
            </div>
            <p className="ant-upload-text">
              برای آپلود فایل اینجا را کلیک یا فایل خود را بکشید
            </p>
            <p className="text-xs text-gray-500 flex justify-center items-center gap-2">
              <FileImageOutlined /> تصاویر (.jpg, .png) &nbsp; | &nbsp;
              <FilePdfOutlined /> اسناد PDF
            </p>
          </Dragger>
        </Form.Item>

        <Form.Item label="کد امنیتی">
          <Input placeholder="کد را وارد کنید" size={inputSize} />
        </Form.Item>

        <Form.Item>
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <Button danger size={inputSize} className="w-full md:w-auto">
              انصراف
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              size={inputSize}
              className="w-full md:w-auto"
            >
              ارسال گزارش
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CorruptionReportForm;
