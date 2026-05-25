import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vectris — A New Kind of Puzzle Game",
  description: "Hybrid puzzle game fusing falling-block placement with arrow extraction. Coming soon to iOS and Android.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
