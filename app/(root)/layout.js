import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";

export default function RootLayout({ children }) {
    return (
    <html lang="en">
        <body>
              <NavBar/>
              {children}
              <Footer/>
        </body>
    </html>
  );
}
