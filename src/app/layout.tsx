import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Creative Technology Portfolio",
  description: "A cinematic orbital portfolio for fullstack, game development, and multimedia work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <div className="noise-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
