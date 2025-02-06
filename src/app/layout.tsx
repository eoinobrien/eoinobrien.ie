import type { Metadata } from "next";
import "./globals.css";
import { LayoutHeader } from "./components/layout-header";
import { LayoutFooter } from "./components/layout-footer";
import { Fraunces, Work_Sans } from "next/font/google";

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
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS Feed"
          href={
            new URL(
              "rss.xml",
              new URL(process.env["HOST"] ?? "https://eoinobrien.ie")
            ).href
          }
        />
      </head>
      <body
        className={`
          ${bodyFont.variable}
          ${headingsFont.variable}
           flex flex-col min-h-screen`}
      >
        <LayoutHeader />
        <div className="flex-1">
          <div>{children}</div>
        </div>
        <LayoutFooter />
      </body>
    </html>
  );
}
