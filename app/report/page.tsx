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
  Steps,
} from "antd";
import { FilePdfOutlined, FileImageOutlined } from "@ant-design/icons";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import CaptchaField from "@/components/CaptchaField";

const { Option } = Select;
const { TextArea } = Input;
const { Dragger } = Upload;
const { Paragraph } = Typography;
const { Step } = Steps;

const inputSize = "large";

const CorruptionReportForm = () => {
  const [form] = Form.useForm();
  const [currentStep, setCurrentStep] = useState(0);

  const maxChars = 4000;
  const descriptionValue = Form.useWatch("description", form) || "";

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

  const next = async () => {
    try {
      await form.validateFields();
      setCurrentStep(currentStep + 1);
    } catch (error) {
      message.error("لطفاً فیلدهای الزامی را تکمیل کنید.");
    }
  };

  const prev = () => {
    setCurrentStep(currentStep - 1);
  };

  const steps = [
    {
      title: <span className="text-xs">اطلاعات پایه</span>,
      content: (
        <>
          <Row gutter={16}>
            <Col xs={24}>
              <Form.Item
                label="موضوع"
                name="topic"
                rules={[{ required: true, message: "لطفا این بخش را پر کنید" }]}
              >
                <Select placeholder="انتخاب موضوع" size={inputSize}>
                  <Option value="مالی">مالی</Option>
                  <Option value="اداری">اداری</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item
                label="دستگاه اجرایی"
                name="organization"
                rules={[{ required: true, message: "لطفا این بخش را پر کنید" }]}
              >
                <Select placeholder="انتخاب دستگاه اجرایی" size={inputSize}>
                  <Option value="وزارت A">وزارت A</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="موضوع تخصصی"
                name="subject"
                rules={[{ required: true, message: "لطفا این بخش را پر کنید" }]}
              >
                <Select placeholder="انتخاب موضوع تخصصی" size={inputSize}>
                  <Option value="قرارداد">قرارداد</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item
                label="نوع گزارش"
                name="reportType"
                rules={[{ required: true, message: "لطفا این بخش را پر کنید" }]}
              >
                <Select placeholder="انتخاب نوع گزارش" size={inputSize}>
                  <Option value="مستند">مستند</Option>
                  <Option value="تحلیلی">تحلیلی</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="فوریت رسیدگی"
                name="urgency"
                rules={[{ required: true, message: "لطفا این بخش را پر کنید" }]}
              >
                <Select placeholder="انتخاب فوریت" size={inputSize}>
                  <Option value="فوری">فوری</Option>
                  <Option value="عادی">عادی</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item
                label="برآورد ارزش فساد"
                name="value"
                rules={[{ required: true, message: "لطفا این بخش را پر کنید" }]}
              >
                <Select placeholder="انتخاب ارزش" size={inputSize}>
                  <Option value="کمتر از ۱۰ میلیون">کمتر از ۱۰ میلیون</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="محدوده جغرافیایی تأثیر"
                name="region"
                rules={[{ required: true, message: "لطفا این بخش را پر کنید" }]}
              >
                <Select placeholder="انتخاب محدوده" size={inputSize}>
                  <Option value="ملی">ملی</Option>
                  <Option value="استانی">استانی</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            label="سازمان‌های مشارکت‌کننده در فساد"
            name="collaborators"
          >
            <Select
              mode="tags"
              placeholder="سازمان‌ها را وارد کنید"
              size={inputSize}
            />
          </Form.Item>
        </>
      ),
    },
    {
      title: <span className="text-xs">شرح و پیوست</span>,
      content: (
        <>
          <Form.Item
            label="شرح فساد"
            name="description"
            rules={[{ required: true, max: maxChars }]}
          >
            <TextArea
              rows={6}
              maxLength={maxChars}
              placeholder="شرح فساد را وارد کنید (حداکثر ۴۰۰۰ کاراکتر)"
              size={inputSize}
            />
          </Form.Item>{" "}
          <div className="mt-1">
            <Progress
              percent={Math.min(
                (descriptionValue.length / maxChars) * 100,
                100
              )}
              showInfo={false}
              status={
                descriptionValue.length > maxChars ? "exception" : "normal"
              }
            />
            <div className="text-sm text-gray-500 text-right">
              {descriptionValue.length} / {maxChars} کاراکتر
            </div>
          </div>
          <Form.Item label="پیوست اسناد (عکس یا PDF)">
            <Paragraph type="secondary" className="mb-2 text-sm">
              تنها فایل‌های تصویری و PDF قابل بارگذاری هستند. حداکثر حجم هر فایل
              ۵ مگابایت.
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
        </>
      ),
    },
    {
      title: <span className="text-xs">تأیید و ارسال</span>,
      content: (
        <>
          <CaptchaField />
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
        </>
      ),
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 rounded-2xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-center mb-6">
          ثبت گزارش فساد ناشناس
        </h2>
        <Link href="/">
          <Icon icon="solar:arrow-left-line-duotone" width="40" height="40" />
        </Link>
      </div>

      <Steps
        current={currentStep}
        className="mb-8"
        size="small"
        responsive
        direction="horizontal"
        style={{ overflowX: "auto" }}
      >
        {steps.map((step, index) => (
          <Step key={index} title={step.title} />
        ))}
      </Steps>

      <Form layout="vertical" form={form} scrollToFirstError>
        {steps[currentStep].content}

        <div className="flex justify-between mt-6 flex-col sm:flex-row gap-4">
          {currentStep > 0 && (
            <Button
              onClick={prev}
              size={inputSize}
              className="w-full sm:w-auto"
            >
              مرحله قبل
            </Button>
          )}
          {currentStep < steps.length - 1 && (
            <Button
              type="primary"
              onClick={next}
              size={inputSize}
              className="w-full sm:w-auto"
            >
              مرحله بعد
            </Button>
          )}
        </div>
      </Form>
    </div>
  );
};

export default CorruptionReportForm;
