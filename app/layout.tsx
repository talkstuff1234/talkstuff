import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

// ── SITE METADATA — edit title, description, favicon ──
export const metadata: Metadata = {
  title: "TalkStuff Digital Services",
  description:
    "Full-service digital agency helping businesses grow their brand, reach the right audience, and drive measurable results.",
  // ── Add your OG image and other meta tags below ──
  // openGraph: { images: ["/og-image.png"] },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/*
        suppressHydrationWarning is required for next-themes to avoid
        hydration mismatch between server and client.
      */}
      <head>
        {/* ── ADD CUSTOM FONTS HERE if using Google Fonts ── */}
        {/* Example:
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
        */}
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
