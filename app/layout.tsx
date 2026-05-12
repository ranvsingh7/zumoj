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
  title: "zumoj | Pure Veg Cloud Kitchen",
  description: "Ghar ka khana ghar se — premium 100% pure veg cloud kitchen with hygienic cooking, home-style taste, and fast delivery.",
  metadataBase: new URL("https://zumoj.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "zumoj | Pure Veg Cloud Kitchen",
    description: "Ghar ka khana ghar se — premium 100% pure veg cloud kitchen.",
    url: "https://zumoj.com",
    siteName: "zumoj",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "zumoj | Pure Veg Cloud Kitchen",
    description: "Ghar ka khana ghar se — premium 100% pure veg cloud kitchen.",
  },
  icons: {
    icon: "/favicon.svg",
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
