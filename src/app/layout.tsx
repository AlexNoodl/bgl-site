import type { Metadata } from "next";
import "./globals.css";
import type { ReactNode } from "react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} text-foreground mx-auto min-h-screen max-w-344 min-w-5xl px-8 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
