import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Saad Nasim Ullah | Full Stack Developer",
  description:
    "Senior MERN/PHP Full Stack Developer with 5+ years of experience building scalable web applications, APIs, and eCommerce platforms.",
  openGraph: {
    title: "Saad Nasim Ullah | Full Stack Developer",
    description:
      "Senior MERN/PHP Full Stack Developer — React, Next.js, Node.js, Laravel, AWS.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#0c0f14] font-sans text-zinc-300 antialiased">
        {children}
      </body>
    </html>
  );
}
