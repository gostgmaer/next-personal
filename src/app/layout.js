import "./globals.css";
import { Inter } from "next/font/google";
import { AppProvider } from "@/contex/contextAPi";
import { AuthContextProvider } from "@/contex/authContext";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <AppProvider>
      <AuthContextProvider>
        <html lang="en">
          <body className={inter.className} suppressHydrationWarning={true}>
            <main className="bg-light w-full min-h-screen text-dark">
              {children}
            </main>
          </body>
        </html>
      </AuthContextProvider>
    </AppProvider>
  );
}
