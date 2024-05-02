import React from "react";
import "./globals.css";
import { Poppins as FontSans } from "next/font/google";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/ThemeProvider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Cryptolytic",
  description: "Evently is a platform for event management.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />

      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
