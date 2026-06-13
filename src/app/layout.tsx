import type { Metadata } from "next";
import { Inter, Space_Grotesk } from 'next/font/google';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import Script from 'next/script';
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
        <div id="google_translate_element" style={{ display: 'none' }} />
        <Navbar />
        {children}
        <Footer />
        <Script
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            window.googleTranslateElementInit = function() {
              new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'en,de,fr,it',
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: false
              }, 'google_translate_element');
            }
          `}
        </Script>
      </body>
    </html>
  );
}
