import React from "react";
import { Button, Result } from "antd";

const App: React.FC = () => (
  <Result
    status="403"
    title="403"
    subTitle="شما اجازه دسترسی به سایت را ندارید"
    extra={<Button type="primary">Back Home</Button>}
  />
);

export default App;
