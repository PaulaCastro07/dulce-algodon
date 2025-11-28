// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar";

// Importar tipografías premium
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dulce Algodón · Ropa para bebés",
  description: "Emprendimiento de ropita suave y cómoda para bebés.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-[#f1ece2] text-stone-900 flex min-h-screen flex-col antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
