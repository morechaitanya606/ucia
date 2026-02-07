import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "UICA - United Innovation and Care Association",
  description: "Empowering communities through innovation, sustainable development, and skill training across rural and urban India.",
  keywords: ["NGO", "sustainable development", "skill training", "rural development", "India", "Maharashtra"],
  authors: [{ name: "UICA" }],
  openGraph: {
    title: "UICA - Innovation for Social Impact",
    description: "Transforming communities through sustainable development and technology-driven solutions.",
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
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        {/* Subtle Background Gradient */}
        <div className="background-gradient" />

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main>
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
