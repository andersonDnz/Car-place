import type { Metadata } from "next";

import "./globals.css";

import {
  Navbar,
  Footer
} from "@/components";


export const metadata: Metadata = {
  title: "Car place",
  description: "Melhores linhas de carros do mercado ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
