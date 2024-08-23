import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import { toggleTheme } from "@/store/features/Theme/themeSlice";
// import { useSelector } from "react-redux";

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
