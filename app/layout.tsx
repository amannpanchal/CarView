import "./globals.css";

import { Footer, NavBar } from "@components";
import logo from  '../components/logo.png'

export const metadata = {
  title: "CarView",
  description: "Discover world's best car showcase application",


};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
