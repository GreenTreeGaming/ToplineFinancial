import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

// Use DM Sans for all text
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Topline Financial Quiz",
  description: "Test your financial literacy in 50 questions!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
