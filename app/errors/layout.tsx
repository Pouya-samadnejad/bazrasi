import React from "react";
import { type LayoutProps } from "@/.next/types/app/main/layout";

export default function layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col gap-2 items-center justify-center  h-screen">
      {children}
    </div>
  );
}
