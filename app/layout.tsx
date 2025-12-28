import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 1. Define your domain strictly here
const BASE_URL = "https://my-image-site-wine.vercel.app";

export const metadata: Metadata = {
  // This is the most important line for Facebook images to work
  metadataBase: new URL(BASE_URL),
  
  title: "💦",
  description: " ",

  openGraph: {
    title: "💦",
    description: " ",
    url: BASE_URL,
    siteName: "My Image Site",
    type: "website",
    // We do NOT list 'images' here. 
    // Next.js will automatically find your 'opengraph-image.tsx' 
    // and insert the correct 1200x630 link.
  },

  twitter: {
    card: "summary_large_image",
    title: "💦",
    description: " ",
    // Twitter will also automatically pick up the opengraph-image.tsx
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}