import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import ClientProvider from "./provider/query-client";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Learning Nextjs",
  description: "I hope this will be the most funny journey i take",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientProvider>
          <header className="px-4 py-1 shadow-xs shadow-white">
            <nav className="space-x-2 underline font-semibold text-lg">
              <Link href={"/"}>Home</Link>
              <Link href={"/products"}>Products</Link>
            </nav>
          </header>
          {children}
        </ClientProvider>
      </body>
    </html>
  );
}
