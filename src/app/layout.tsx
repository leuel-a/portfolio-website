import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/common/Header";

const barlow = localFont({
  src: [
    {
      path: "../../public/fonts/barlow/Barlow-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/barlow/Barlow-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/barlow/Barlow-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../../public/fonts/barlow/Barlow-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--ff-sans",
});

const barlowCond = localFont({
  src: [
    {
      path: "../../public/fonts/barlow_condensed/BarlowCondensed-Regular.ttf",
      weight: "400",
    },
  ],
  variable: "--ff-sans-cond",
});

const bellefair = localFont({
  src: [
    {
      path: "../../public/fonts/bellefair/Bellefair-Regular.ttf",
    },
  ],
  variable: "--ff-serif",
});

const precious = localFont({
  src: [
    {
      path: "../../public/fonts/precious/Precious.ttf",
    },
  ],
  variable: "--ff-precious",
});

export const metadata: Metadata = {
  title: "Leuel A - Portfolio Site",
  description: "Portfolio Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${bellefair.variable} ${barlowCond.variable} ${precious.variable}`}
    >
      <body className="ff-sans min-h-screen bg-dark-blue text-lg text-accent">
        <Header />
        {children}
      </body>
    </html>
  );
}
