import type { Metadata } from "next";
import { Public_Sans as FontSans, Ibarra_Real_Nova as FontSerif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { portfolio } from "@/lib/data";

const sans = FontSans({
  variable: "--ff-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const serif = FontSerif({
  variable: "--ff-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Uddipta Gogoi | Portfolio",
    template: "%s | Uddipta Gogoi",
  },
  description: "Full Stack Developer portfolio - Building beautiful, performant web applications with React, Next.js, and Node.js",
  openGraph: {
    title: "Uddipta Gogoi | Portfolio",
    description: "Full Stack Developer portfolio - Building beautiful, performant web applications",
    images: ["/og-image.jpg"],
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    siteName: "Uddipta Gogoi Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uddipta Gogoi | Portfolio",
    description: "Full Stack Developer portfolio",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${sans.variable} ${serif.variable} antialiased`}>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-[calc(100dvh-8rem)]">{children}</main>
          <Footer socials={portfolio.socials} />
        </ThemeProvider>
      </body>
    </html>
  );
}