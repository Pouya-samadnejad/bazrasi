import { iranyekan } from "@/app/layout";
import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: "#52c41a",
    fontFamily: iranyekan,
  },
  components: {
    Form: {
      itemMarginBottom: 12,
      labelFontSize: 12,
    },
  },
};

export default theme;
