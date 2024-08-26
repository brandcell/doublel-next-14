import  { Cormorant_Garamond, Work_Sans} from 'next/font/google'
import Footer from '@/components/Footer';

import "./globals.css";

const cg_init = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cg",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const ws_init = Work_Sans({ subsets: ["latin"], variable: "--font-ws" });

export const cg = cg_init.variable
export const ws = ws_init.variable


export const metadata = {
  title: "Double L Villa",
  description: "Where you Live to Laugh and Love",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ws} ${cg} font-ws`}>{children}</body>
      <Footer></Footer>
    </html>
  );
}
