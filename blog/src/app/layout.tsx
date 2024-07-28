import type { Metadata } from "next";
import "./globals.css";
import { LayoutHeader } from "./components/layout-header";
import { LayoutFooter } from "./components/layout-footer";
import { Fraunces, Work_Sans  } from "next/font/google";

const bodyFont = Work_Sans({ subsets: ["latin"], variable: "--body-font" });
const headingsFont = Fraunces({
  subsets: ["latin"],
  variable: "--headings-font",
});

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
      <body
        className={
          bodyFont.variable +
          " " +
          headingsFont.variable +
          " px-2 flex flex-col min-h-screen"
        }
      >
        <LayoutHeader />
        <div className="flex-1">
          <div className="max-w-4xl mx-auto">{children}</div>
        </div>
        <LayoutFooter />
      </body>
    </html>
  );
}
