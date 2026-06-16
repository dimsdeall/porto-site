import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dimas Nurcahyo Putra — Full Stack Developer",
  description:
    "Portfolio of Dimas Nurcahyo Putra — Full Stack & Mobile Engineer specializing in React, React Native, Node.js, and DevOps. Based in Indonesia.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "React Native",
    "Node.js",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Indonesia",
  ],
  authors: [{ name: "Dimas Nurcahyo Putra" }],
  openGraph: {
    title: "Dimas Nurcahyo Putra — Full Stack Developer",
    description:
      "Portfolio of Dimas Nurcahyo Putra — Full Stack & Mobile Engineer.",
    type: "website",
    locale: "id_ID",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${jetbrainsMono.variable} antialiased`}>
      <body className="background-layer min-h-screen">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
