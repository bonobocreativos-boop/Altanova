import type { Metadata } from "next";
import { Inter, Space_Grotesk } from 'next/font/google';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

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
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
