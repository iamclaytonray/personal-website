import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";

const mona = Mona_Sans({
  variable: "--font-mona",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clayton — building Boardbox, WithCoach and Raft",
  description:
    "I'm a founder in Asia building three companies in order: Boardbox, WithCoach and Raft. Before this I cofounded TeachMe.To and grew it to profitability and a $2M Series A.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={mona.variable}>
      <body>{children}</body>
    </html>
  );
}
