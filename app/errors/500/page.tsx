import React from "react";
import { Button, Result } from "antd";

const App: React.FC = () => (
  <Result
    status="500"
    title="500"
    subTitle="خطای سرور"
    extra={<Button type="primary">Back Home</Button>}
  />
);

export default App;
