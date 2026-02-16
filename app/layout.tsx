import type { Metadata } from "next";
import { Geist, Geist_Mono, Solway } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const solway = Solway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Big Al's Pizza",
  description: "Discover Big Al's Pizza in Billerica, MA. Pizza by Chef Tim Maslow. A must-try for foodies & pizza lovers.",
  icons: {
    icon: "/assets/PizzaBoy.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${solway.className} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
