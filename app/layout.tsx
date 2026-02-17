import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Isaac Malak",
  description: "Created with coffee",
};
// image that will appear on social media when sharing the website link
const metaImageUrl = "/images/profile_colored.jpg";

metadata.openGraph = {
  images: [
    {
      url: metaImageUrl,
      width: 1200,
      height: 630,
      alt: "Isaac Malak",
    },
  ],
};
metadata.twitter = {
  card: "summary_large_image",
  images: [metaImageUrl],
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
