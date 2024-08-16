import Header from "@/components/header/Header";
import "./globals.css";
import Providers from "@/components/Providers";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FusionCart",
  description: "A generic modern e-commerce web application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            {children}
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
              <p>Copyright © 2024 - All rights reserved by Fusion Cart</p>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
