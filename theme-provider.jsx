"use client";

import React from "react";
import { ThemeProvider } from "next-themes";

function ThemeProviderWrapper({ children }) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
      storageKey="block-ui-theme"
    >
      {children}
    </ThemeProvider>
  );
}

export default ThemeProviderWrapper;
