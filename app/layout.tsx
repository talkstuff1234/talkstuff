import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import heroImage from "@/assets/hero.png";
import Navbar from "@/components/layout/Navbar";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/site";
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
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.shortName,
  title: {
    default: "TalkStuff | Digital Marketing & Billboard Advertising",
    template: "%s | TalkStuff",
  },
  description: siteConfig.description,
  keywords: [
    "digital marketing agency Abuja",
    "digital marketing Nigeria",
    "billboard advertising Abuja",
    "outdoor advertising Nigeria",
    "social media marketing",
    "content creation",
    "web design",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "/",
    siteName: siteConfig.shortName,
    title: "TalkStuff | Digital Marketing & Billboard Advertising",
    description: siteConfig.description,
    images: [
      {
        url: heroImage.src,
        width: heroImage.width,
        height: heroImage.height,
        alt: "TalkStuff digital growth and outdoor advertising",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TalkStuff | Digital Marketing & Billboard Advertising",
    description: siteConfig.description,
    images: [heroImage.src],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "marketing",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NG" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Navbar />
        <AnimatedBackground />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
