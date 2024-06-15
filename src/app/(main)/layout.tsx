import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import { LayoutProps } from "@/types";
const poppins = Poppins({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });
import Provider from "../lib/Provider";
import Navigation from "@/components/navigation/Navigation";

export const metadata: Metadata = {
  title: "Acorn Taxis | Call Us Now 01827 63333",
  description: "Tamworth's largest provider of Private Hire and Hackney Carrage Vehicles. With all vehicles accepting Card or Cash payments. Booking has never been easier",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Provider>
          <Navigation />
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  );
}
