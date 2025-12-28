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

export const metadata: Metadata = {
  // 1. Set the Base URL (REQUIRED for social images to work)
  // Replace this with your actual domain name
  metadataBase: new URL("https://my-image-site-wine.vercel.app"),

  title: "💦",
  description: " ",

  openGraph: {
    title: "💦",
    description: " ",
    // 2. Force the specific horizontal image
    images: [
      {
        url: "/thumbnail.jpg", // Ensure this file is in your public folder
        width: 1200,           // Forces FB to show full width
        height: 630,           // Forces FB to show full width
        alt: "Preview",
      },
    ],
    type: "website",
  },

  // 3. Ensure Twitter/X also shows the big card
  twitter: {
    card: "summary_large_image",
    title: "💦",
    description: " ",
    images: ["/thumbnail.jpg"],
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