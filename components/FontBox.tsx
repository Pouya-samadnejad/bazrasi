"use client";

import { useFont } from "@/context/FontContext";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

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

  return (
    <Popover open={visible} onOpenChange={setVisible}>
      <PopoverTrigger asChild>
        <Button
          variant="default"
          size="icon"
          className="fixed left-2 top-1/2 transform -translate-y-1/2 z-50 w-12 h-12 p-0 bg-blue-800 hover:bg-blue-950"
        >
          <Icon
            icon="solar:magic-stick-3-line-duotone"
            width="24"
            height="24"
          />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        className="w-[260px] text-sm bg-white/80 backdrop-blur-[20px]"
        side="right"
        align="center"
      >
        <div className="space-y-6">
          <div>
            <label className="font-bold mb-2 block">
              اندازه فونت: <span className="text-primary">{fontSize}</span>
            </label>
            <Slider
              min={12}
              max={24}
              step={1}
              defaultValue={[parseInt(fontSize.replace("px", ""))]}
              onValueChange={([value]) => setFontSize(`${value}px`)}
              className="text-blue-800"
            />
          </div>

          <div>
            <label className="font-bold mb-2 block">
              ضخامت فونت: <span className="text-primary">{fontWeight}</span>
            </label>
            <Slider
              min={100}
              max={900}
              step={100}
              defaultValue={[parseInt(fontWeight)]}
              onValueChange={([value]) => setFontWeight(`${value}`)}
              className="text-blue-800"
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
