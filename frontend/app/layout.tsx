import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ShipSight Intelligence — Cross-Border Supply Chain Risk Predictor",
  description:
    "AI-powered customs delay prediction. Predict shipment risks, understand what drives delays, and get actionable mitigation plans — all in seconds.",
  keywords: [
    "supply chain",
    "risk prediction",
    "customs delay",
    "shipment tracking",
    "delay prediction",
    "cross-border trade",
    "supply chain intelligence",
  ],
  authors: [{ name: "ShipSight Intelligence Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <Navbar />
        <main style={{ position: "relative", zIndex: 1 }}>{children}</main>
      </body>
    </html>
  );
}
