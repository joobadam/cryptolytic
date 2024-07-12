import React from "react";
import "./globals.css";
import { Poppins as FontSans } from "next/font/google";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { QueryProvider } from "@/components/shared/QueryProvider";
import Warning from "@/components/shared/Warning";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Cryptolytic",
  description: "Unlock the Future of Finance",
  icons: {
    icon: "/assets/images/logo.svg",
  },
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
          "h-fit bg-background font-sans antialiased flex flex-col",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <Header />
            <main className="flex-1 overflow-hidden">{children}</main>
            <Warning />
            <Footer />
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
