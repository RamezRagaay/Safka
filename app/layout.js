import { Inter } from "next/font/google";
import "./globals.css";
import ClientProvider from "@/components/clientProvider";


export const metadata = {
  title: "Safka", 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body >
          <ClientProvider>
              {children}
          </ClientProvider>
        </body>
    </html>
  );
}
