import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Baddie Eats - Your Perfect Plus One, On Demand",
  description: "Book verified companions for your events. Professional support, VIP access, and memory capture - all through our mobile app.",
  keywords: ["dating app", "event companion", "plus one", "professional dating", "VIP access"],
  authors: [{ name: "Baddie Eats" }],
  openGraph: {
    title: "Baddie Eats - Your Perfect Plus One, On Demand",
    description: "Book verified companions for your events. Professional support, VIP access, and memory capture.",
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
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
