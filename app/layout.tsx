import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ASTORAT AL NAWRAS",
  description: "Created with Next.js 15.2.4 and Tailwind CSS",
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
