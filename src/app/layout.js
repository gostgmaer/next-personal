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
          <main className="flex min-h-screen items-center justify-center overflow-hidden bg-[url('/assets/images/img1.jpg')] bg-cover bg-no-repeat bg-bottom">
            <Navbar />
            <div className="min-h-screen flex-col justify-between flex items-center flex-[11] max-h-screen p-5 bg-black/[.80]">
              <Top />
              {children}
            </div>
          </main>
        </body>
      </html>
    </AppProvider>
  );
}
