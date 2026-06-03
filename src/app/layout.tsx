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
  metadataBase: new URL("https://digitaltechsolusi.com"),
  title: "DigitalTech Solusi Nusantara | Platform Asesmen Digital",
  description:
    "Platform asesmen digital terintegrasi untuk CBT Assess, OSCE Assess, dan Tutor Assess bagi institusi pendidikan dan kesehatan.",
  alternates: {
    canonical: "https://digitaltechsolusi.com",
  },
  openGraph: {
    title: "DigitalTech Solusi Nusantara | Platform Asesmen Digital",
    description:
      "Platform asesmen digital terintegrasi untuk CBT Assess, OSCE Assess, dan Tutor Assess bagi institusi pendidikan dan kesehatan.",
    url: "https://digitaltechsolusi.com",
    siteName: "DigitalTech Solusi Nusantara",
    type: "website",
    images: [
      {
        url: "https://digitaltechsolusi.com/og-digitaltech.png",
        width: 1200,
        height: 630,
        alt: "DigitalTech Solusi Nusantara Platform Asesmen Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DigitalTech Solusi Nusantara | Platform Asesmen Digital",
    description:
      "Platform asesmen digital terintegrasi untuk CBT Assess, OSCE Assess, dan Tutor Assess bagi institusi pendidikan dan kesehatan.",
    images: ["https://digitaltechsolusi.com/og-digitaltech.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
