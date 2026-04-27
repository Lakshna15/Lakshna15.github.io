import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lakshna Dhanaraj | Software Engineer Portfolio",
  description: "Software Engineer & IT Graduate Student Portfolio",
  openGraph: {
    title: "Lakshna Dhanaraj | Software Engineer",
    description: "Software Engineer and IT graduate student. Explore my projects, skills, and experience.",
    url: "https://lakshna-portfolio.vercel.app",
    siteName: "Lakshna's Portfolio",
    images: [
      {
        url: "https://lakshna-portfolio.vercel.app/og-image.png",
        width: 1024,
        height: 1024,
        alt: "Portfolio Preview",
      },
    ],
    locale: "en_US",
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
      <body className={inter.className}>
        <Navigation />
        <main style={{ marginLeft: "80px", minHeight: "100vh" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
