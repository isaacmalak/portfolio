import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-navy-tau-c3v4iquzvh.vercel.app"),
  title: "Isaac Malak",
  description: "Created with coffee",
  openGraph: {
    title: "Isaac Malak",
    description: "Created with coffee",
    images: [
      {
        url: "/images/profile_colored.jpg",
        width: 1200,
        height: 630,
        alt: "Isaac Malak",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Isaac Malak",
    description: "Created with coffee",
    images: ["/images/profile_colored.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
