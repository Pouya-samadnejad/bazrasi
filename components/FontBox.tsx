"use client";

import { useFont } from "@/context/FontContext";
import { Icon } from "@iconify/react/dist/iconify.js";
import { FloatButton, Slider, Popover } from "antd";
import { useEffect, useState } from "react";

export default function FontBox() {
  const { fontSize, setFontSize, fontWeight, setFontWeight } = useFont();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const storedSize = localStorage.getItem("fontSize");
    const storedWeight = localStorage.getItem("fontWeight");

    if (storedSize) setFontSize(storedSize);
    if (storedWeight) setFontWeight(storedWeight);
  }, []);

  useEffect(() => {
    localStorage.setItem("fontSize", fontSize);
  }, [fontSize]);

  useEffect(() => {
    localStorage.setItem("fontWeight", fontWeight);
  }, [fontWeight]);

  const content = (
    <div style={{ width: 240, fontSize: "16px" }}>
      <div style={{ marginBottom: "24px" }}>
        <label
          htmlFor="fontSizeSlider"
          style={{ fontWeight: "bold", display: "block", marginBottom: "8px" }}
        >
          اندازه فونت: <span style={{ color: "#1677ff" }}>{fontSize}</span>
        </label>
        <Slider
          id="fontSizeSlider"
          min={12}
          max={24}
          value={parseInt(fontSize.replace("px", ""))}
          onChange={(value) => setFontSize(`${value}px`)}
        />
      </div>

      <div>
        <label
          htmlFor="fontWeightSlider"
          style={{ fontWeight: "bold", display: "block", marginBottom: "8px" }}
        >
          ضخامت فونت: <span style={{ color: "#1677ff" }}>{fontWeight}</span>
        </label>
        <Slider
          id="fontWeightSlider"
          min={100}
          max={900}
          step={100}
          value={parseInt(fontWeight)}
          onChange={(value) => setFontWeight(`${value}`)}
        />
      </div>
    </div>
  );

  return (
    <Popover
      content={content}
      title="تنظیمات فونت"
      trigger="click"
      open={visible}
      onOpenChange={(open) => setVisible(open)}
      placement="right"
    >
      <FloatButton
        shape="square"
        type="primary"
        style={{
          position: "fixed",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          width: 48,
          height: 48,
          padding: 0,
          lineHeight: 0,
          zIndex: 1000,
        }}
        icon={
          <Icon
            icon="solar:magic-stick-3-line-duotone"
            width="24"
            height="24"
          />
        }
      />
    </Popover>
  );
}
