import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Foot";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RiisBiConstructions",
  description: "Construction Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
