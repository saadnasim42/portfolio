import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Saad Nasim Ullah | Full Stack Developer Portfolio",
  description:
    "Senior MERN/PHP Full Stack Developer with 5+ years building scalable web applications, REST APIs, dashboards, and eCommerce platforms.",
  openGraph: {
    title: "Saad Nasim Ullah | Full Stack Developer",
    description:
      "Senior Full Stack Developer — React, Next.js, Node.js, Laravel, AWS.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#060b18] font-sans text-slate-300 antialiased">
        {children}
      </body>
    </html>
  );
}
