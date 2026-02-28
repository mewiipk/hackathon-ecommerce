import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Commenti",
  description: "SaaS review management for e-commerce sellers"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
