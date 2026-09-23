import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Akshay Chandran — Full-Stack Developer",
  description: "Portfolio of Akshay Chandran — Flutter, Node.js, MongoDB and modern full-stack development.",
  metadataBase: new URL("https://akshaychandran.dev"),
  openGraph: {
    title: "Akshay Chandran — Full-Stack Developer",
    description: "Flutter • Node.js • MongoDB • Redis • WebRTC",
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
