import React from "react";

export default function layout({ children }) {
  return (
    <div className="flex flex-col gap-2 items-center justify-center  h-screen">
      {children}
    </div>
  );
}
