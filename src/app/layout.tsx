import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: '/delivery.png',
  },
  title: "La Placita Delivery",
  description: "Mercado en línea para adquirir productos en combos, solo con productos locales que apoyan a los campesinos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/delivery1.ico" />
      </head>
      
      <body className={`${inter.className} bg-white`}>{children}</body>
    </html>
  );
}
