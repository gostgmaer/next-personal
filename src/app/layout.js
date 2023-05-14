import Navbar from "@/components/navbar";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Top from "@/components/Top";
import { AppProvider } from "@/contex/contextAPi";
import { useGlobalContext } from "@/contex/contextAPi";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <AppProvider>
      <html lang="en">
        <body className={montserrat.className}>
          <main className="bg-light w-full min-h-screen text-dark">
            <Navbar />
            {children}
          </main>
        </body>
      </html>
    </AppProvider>
  );
}
