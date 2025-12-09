import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import NextTopLoader from 'nextjs-toploader';
import { clsx } from "clsx";

export const preferredRegion = ['sin1'];

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://royalindustrialcorp.com'),
  title: {
    template: '%s | Royal Industrial Corporation',
    default: 'Royal Industrial Corporation | Authorized Distributor & Supplier',
  },
  description: "Premier distributor of Loctite, CRC, 3M, and industrial adhesives/sealants in Secunderabad. Serving industries since 2000 with genuine products.",
  keywords: ["Industrial Adhesives", "Loctite Distributor", "Secunderabad", "Telangana", "Royal Industrial Corporation", "Sealants", "Industrial Tapes", "CRC Sprays"],
  openGraph: {
    title: 'Royal Industrial Corporation',
    description: 'Authorized Distributor for Loctite, CRC, 3M, and more.',
    url: 'https://royalindustrialcorp.com',
    siteName: 'Royal Industrial Corporation',
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={clsx(inter.variable, oswald.variable, "antialiased min-h-screen flex flex-col font-sans bg-slate-950 text-slate-200")}
      >
        <NextTopLoader color="#002366" height={3} showSpinner={false} />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
