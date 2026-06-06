import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Altanova Pharma — Swiss specialty pharma platform",
  description: "Altanova Pharma is a Swiss specialty pharmaceutical platform building the regulated access layer for life-changing therapies in chronic disease care.",
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
