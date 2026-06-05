import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Jostin Beleño | Portafolio",
    template: "%s | Jostin Beleño",
  },
  description:
    "Portafolio profesional de diseño digital, branding y experiencias UI con enfoque creativo y ejecución moderna.",
  keywords: [
    "systems engineer",
    "software architecture",
    "Next.js",
    "AI automation",
    "DevOps",
    "portfolio",
  ],
  authors: [{ name: "Jostin David Beleño Mackenzie" }],
  openGraph: {
    title: "Jostin Beleño | Portafolio",
    description:
      "Diseño de marca, contenido multimedia y experiencias digitales con criterio profesional.",
    type: "website",
    locale: "es_CO",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0a0a0b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body className={`${inter.variable} ${jetBrainsMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
