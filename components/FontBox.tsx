"use client";

import { useFont } from "@/context/FontContext";
import { Icon } from "@iconify/react/dist/iconify.js";
import { FloatButton, Drawer, Slider } from "antd";
import { useState } from "react";

export default function FontBox() {
  const [open, setOpen] = useState(false);
  const { fontSize, setFontSize, fontWeight, setFontWeight } = useFont();

  return (
    <>
      <FloatButton
        shape="circle"
        type="primary"
        onClick={() => setOpen(true)}
        style={{
          position: "fixed",
          left: 0, // 
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

      <Drawer
        title="تنظیمات فونت"
        placement="left"
        onClose={() => setOpen(false)}
        open={open}
      >
        <div className="mb-6">
          <p className="mb-2 font-semibold">اندازه فونت</p>
          <Slider
            min={12}
            max={32}
            value={parseInt(fontSize.replace("px", ""))}
            onChange={(value) => setFontSize(`${value}px`)}
          />
        </div>
        <div>
          <p className="mb-2 font-semibold">ضخامت فونت</p>
          <Slider
            min={100}
            max={900}
            step={100}
            value={parseInt(fontWeight)}
            onChange={(value) => setFontWeight(`${value}`)}
          />
        </div>
      </Drawer>
    </>
  );
}
