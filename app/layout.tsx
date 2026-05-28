import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Anime Illustrator Portfolio",
  description:
    "Bold, modern portfolio of an anime illustrator showcasing character art, brand illustrations, and commissions.",
  keywords:
    "anime, illustration, portfolio, character art, digital art, commissions",
  authors: [{ name: "Anime Artist" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}
    >
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
