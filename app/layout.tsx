import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layouts/header";

export const metadata: Metadata = {
  title: "Website Builder",
  description: "Build your own website without code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
