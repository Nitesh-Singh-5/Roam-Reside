import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";

export const metadata = {
  title: "Roam Reside",
  description: "Roam Reside",
};

const font = Nunito({
  subsets: ["latin"],
});
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <ClientOnly>
          <RegisterModal />
          <LoginModal />
          <Navbar />
          <ToasterProvider />
        </ClientOnly>
        <div className='pb-20 pt-28'>{children}</div>
      </body>
    </html>
  );
}
