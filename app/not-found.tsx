import React from "react";
import { Button, Result } from "antd";
function notFound() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center  h-screen">
      <Result
        status="404"
        title="404"
        subTitle="صفحه مورد نطر وجودندارد"
        extra={
          <Button type="primary" href="/">
            بازگشت به خانه
          </Button>
        }
      />
    </div>
  );
}

export default notFound;
