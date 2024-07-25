import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LayoutHeader } from "./components/layout-header";
import { LayoutFooter } from "./components/layout-footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eoin O'Brien",
  description: "Software engineer, fan of trains.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " px-2 flex flex-col min-h-screen"}>
        <LayoutHeader />
        <div className="flex-1">
          <div className="max-w-4xl mx-auto">{children}</div>
        </div>
        <LayoutFooter />
      </body>
    </html>
  );
}
