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

// Define your domain
const BASE_URL = "https://my-image-site-wine.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "💦",
  description: " ",
  openGraph: {
    title: "💦",
    description: " ",
    url: BASE_URL,
    siteName: "My Image Site",
    type: "website",
    // Next.js automatically detects opengraph-image.tsx
    // No need to manually list 'images' here
  },
  twitter: {
    card: "summary", // 'summary' is better for square images
    title: "💦",
    description: " ",
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