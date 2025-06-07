"use client";

import { createContext, useContext, useState, ReactNode } from "react";

const FontContext = createContext({
  fontSize: "1rem",
  fontWeight: "400",
  setFontSize: (size: string) => {},
  setFontWeight: (weight: string) => {},
});

export const useFont = () => useContext(FontContext);

export const FontProvider = ({ children }: { children: ReactNode }) => {
  const [fontSize, setFontSize] = useState("1rem");
  const [fontWeight, setFontWeight] = useState("400");

  return (
    <FontContext.Provider
      value={{ fontSize, fontWeight, setFontSize, setFontWeight }}
    >
      <div
        style={
          {
            "--font-size": fontSize,
            "--font-weight": fontWeight,
          } as React.CSSProperties
        }
      >
        {children}
      </div>
    </FontContext.Provider>
  );
};
