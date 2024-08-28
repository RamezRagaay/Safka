import { Inter } from "next/font/google";
import "./globals.css";
import ClientProvider from "@/components/clientProvider";
import { cn } from "@/lib/utils"


export const metadata = {
  title: "Safka", 
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
        <body >
          <ClientProvider>
              {children}
          </ClientProvider>
        </body>
    </html>
  );
}
