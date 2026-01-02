import React from "react";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { Sidebar } from "@layouts/Sidebar";
import { ThemeProvider } from "@configs/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased)`}>
        <div className="min-h-screen bg-(--bg-secondary)">
          <ThemeProvider>
            <Sidebar />
            <main className="relative flex-1 ml-64 bg-(--bg-primary)">{children}</main>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
};