import type { Metadata } from "next";
import { Geist, Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";
import Providers from "@/redux/Provider";

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Himanshu Srivastava | Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable}`}
    >
      <body className="font-body bg-background text-text">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}