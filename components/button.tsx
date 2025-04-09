"use client";

import React, { memo } from "react";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";

interface ButtonDemoProps {
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const ButtonDemo: React.FC<ButtonDemoProps> = memo(
  ({ disabled = false, children = "Button", className }) => {
    return (
      <Button disabled={disabled} className={className}>
        <LoaderCircle
          className="-ms-1 me-2 animate-spin"
          size={16}
          strokeWidth={2}
          aria-hidden="true"
        />
        {children}
      </Button>
    );
  }
);

ButtonDemo.displayName = "ButtonDemo";

export default ButtonDemo;
