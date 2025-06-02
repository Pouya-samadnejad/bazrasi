import { getCaptcha } from "@/service/user";
import { useQuery } from "@tanstack/react-query";
import { Form, Input, Button } from "antd";
import Image from "next/image";

const CaptchaField = () => {
  const { data, refetch, isFetching } = useQuery({
    queryKey: ["captcha"],
    queryFn: getCaptcha,
  });

  return (
    <div className="flex items-end gap-2.5">
      <Form.Item
        name="securityCode"
        label="کد امنیتی"
        className="mb-0"
        rules={[{ required: true, message: "کد امنیتی را وارد کنید" }]}
      >
        <Input
          inputMode="numeric"
          pattern="[0-9]*"
          size="large"
          onBeforeInput={(e) => {
            if (!/^\d*$/.test(e.data ?? "")) e.preventDefault();
          }}
        />
      </Form.Item>

      <div className="flex flex-col items-center gap-1">
        {data?.data?.dntCaptchaImage && (
          <Image
            width={200}
            height={30}
            src={`data:image/png;base64,${data.data.dntCaptchaImage}`}
            alt="captcha"
          />
        )}
        <Button
          onClick={() => refetch()}
          loading={isFetching}
          type="link"
          size="small"
          className="text-xs text-blue-500"
        >
          {isFetching ? "در حال بارگذاری..." : "بارگذاری مجدد"}
        </Button>
      </div>
    </div>
  );
};

export default CaptchaField;
