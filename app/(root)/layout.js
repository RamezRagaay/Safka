import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/NavBar";

export default function RootLayout({ children }) {
    return (
      <div className="min-h-screen">
        <Navbar/>
          {children}
        <Footer/>
      </div>
  );
}
