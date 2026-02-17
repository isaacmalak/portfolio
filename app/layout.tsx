import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const socialImageUrl =
  "https://portfolio-navy-tau-c3v4iquzvh.vercel.app/images/profile_colored.jpg";

export const metadata: Metadata = {
  title: "Isaac Malak",
  description: "Created with coffee",
  openGraph: {
    title: "Isaac Malak",
    description: "Created with coffee",
    images: [
      // image that will appear on social media when sharing the website link
      {
        url: socialImageUrl,
        width: 1200,
        height: 630,
        alt: "Isaac Malak",
      },
    ],
    type: "website",
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
