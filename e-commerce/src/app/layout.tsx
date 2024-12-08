import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { Poppins } from 'next/font/google';
import Header from "./components/Header/page";
import Footer from "./components/Footer/page";

const poppins = Poppins({
  subsets: ['latin'], // Add 'latin-ext' or other subsets if needed
  weight: ['100','200','300','400', '500', '600', '700','800','900'], // Define font weights
  variable: '--font-poppins', // Optional: for CSS variables
});

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "E-Commerce",
  description: "Hackathon of frontend using nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
