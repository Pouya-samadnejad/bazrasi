import { getCaptcha } from "@/service/user";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useQuery } from "@tanstack/react-query";
import { Form, Input, Button } from "antd";
import Image from "next/image";

const CaptchaField = () => {
  const { data, refetch, isFetching } = useQuery({
    queryKey: ["captcha"],
    queryFn: getCaptcha,
  });

  return (
    <Form.Item
      name="securityCode"
      label="کد امنیتی"
      rules={[{ required: true, message: "کد امنیتی را وارد کنید" }]}
    >
      <div className="flex items-center gap-4">
        <Input
          inputMode="numeric"
          pattern="[0-9]*"
          size="large"
          className="flex-1"
          onBeforeInput={(e) => {
            if (!/^\d*$/.test(e.data ?? "")) e.preventDefault();
          }}
        />
        <div className="flex items-center h-11 gap-1 ">
          {!isFetching && data?.data?.dntCaptchaImage && (
            <Image
              src={`data:image/png;base64,${data.data.dntCaptchaImage}`}
              alt="captcha"
              unoptimized
              width={0}
              height={0}
              style={{
                height: "38px",
                width: "auto",
                display: "block",
              }}
              className="rounded border"
            />
          )}
          <Button
            onClick={() => refetch()}
            type="link"
            size="small"
            className="text-xs text-blue-500 p-0"
          >
            {isFetching ? (
              <Icon icon="svg-spinners:ring-resize" width="24" height="24" />
            ) : (
              <Icon
                icon="solar:refresh-circle-line-duotone"
                width="24"
                height="24"
              />
            )}
          </Button>
        </div>
      </div>
    </Form.Item>
  );
};

export default CaptchaField;
