'use client';
import React from "react";
import UseThemeCheck from "@/hooks/UseThemeCheck";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { themeCheck } = UseThemeCheck();

  // While theme is initializing, just avoid rendering children to prevent flicker.
  if (!themeCheck) return null;

  return <>{children}</>;
};

export default ThemeProvider;
