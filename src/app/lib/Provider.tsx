import { NextUIProvider } from "@nextui-org/react";
import { LayoutProps } from '@/types/index'

export default function Provider({ children }: LayoutProps) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  );
}
