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
  title: "💦",
  description: " ",
  // This is required to resolve relative image paths (like '/1.jpg') correctly
  // Replace 'https://your-domain.com' with your actual website URL
  metadataBase: new URL("https://your-domain.com"),
  openGraph: {
    title: "💦",
    description: " ",
    type: "website",
    images: [
      {
        url: "/1.jpg", // The image you want to show
        width: 1200,   // Critical: Tells FB this is a large image
        height: 630,   // Critical: Tells FB this is a large image
        alt: "Preview",
      },
    ],
  },
  // Adding Twitter card metadata ensures large images on X/Twitter as well
  twitter: {
    card: "summary_large_image",
    title: "💦",
    description: " ",
    images: ["/1.jpg"], // Same image
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