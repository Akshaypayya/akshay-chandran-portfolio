import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Akshay Chandran P — Flutter & Full-Stack Developer | Immediate Joiner",
  description: "Portfolio of Akshay Chandran — Flutter Developer with 3.5+ years of experience building cross-platform mobile and web applications with Flutter/Dart, Node.js, Express, TypeScript, MongoDB, and modular architecture.",
  metadataBase: new URL("https://akshay-chandran-portfolio.vercel.app"),
  openGraph: {
    title: "Akshay Chandran P — Flutter & Full-Stack Developer",
    description: "Flutter • Dart • Riverpod • Node.js • Express • TypeScript • MongoDB • RASP Security • Immediate Joiner",
    url: "https://akshay-chandran-portfolio.vercel.app",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${space.variable} ${mono.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
