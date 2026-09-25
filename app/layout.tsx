import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "./fonts/inter/Inter-Variable.ttf",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

const poppins = localFont({
  src: [
    { path: "./fonts/poppins/Poppins-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/poppins/Poppins-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/poppins/Poppins-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/poppins/Poppins-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Victoria Montessori School",
  description:
    "Victoria Montessori School Montessori-inspired education from early childhood through Primary Seven in Entebbe, Uganda.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
