import { Rajdhani } from "next/font/google";
import "./globals.css";
import CustomCursor from './components/customCursor';

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Nicolás Rodriguez Portfolio",
  icons: {
    icon: '/icons/NR.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${rajdhani.className} antialiased`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}