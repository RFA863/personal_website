import type { Metadata } from "next";
import { Geist, Geist_Mono, Exo_2, Orbitron } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets:["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Rafi Fajrul",
  description: "Rafi Fajrul personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${exo2.variable} ${orbitron.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
