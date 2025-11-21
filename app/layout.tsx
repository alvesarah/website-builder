import "./globals.css";

import type { Metadata } from "next";
import { Quicksand } from "next/font/google";

import Header from "@/components/layouts/header";


export const metadata: Metadata = {
  title: "Website Builder",
  description: "Build your own website without code.",
};

const quicksand = Quicksand({
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
