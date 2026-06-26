import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Magicbot | AI WhatsApp Automation for UAE Businesses",
  description:
    "Magicbot helps UAE businesses automate WhatsApp replies, qualify leads, book appointments, and close support tickets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
