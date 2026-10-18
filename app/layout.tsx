import type { Metadata, Viewport } from "next";
import { Fraunces, Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK", "opsz"],
});

const browserTitle = "JennySpeelman.dev";
const siteTitle = "Jenny's apps, built with AI.";
const siteDescription = "A playground for the things I prompt into existence.";

export const viewport: Viewport = {
  themeColor: "#fbeef3",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://jennyspeelman.dev"),
  title: browserTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://jennyspeelman.dev",
    siteName: "jennyspeelman.dev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
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
      className={`${geistSans.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
