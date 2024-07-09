import type { Metadata } from "next";
import { Roboto_Slab, IBM_Plex_Sans, Inter } from "next/font/google";
import "./globals.css";

const roboto = Roboto_Slab({ subsets: ["latin"], weight: ["400"] });
const ibm_plex_sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "100", "300", "600", "700"],
});

export const metadata: Metadata = {
  title: "AdjusterCopilot",
  description: "Intelligent workflows for P&C insurance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ibm_plex_sans.className}>{children}</body>
    </html>
  );
}
