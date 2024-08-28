import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";

export default function RootLayout({ children }) {
    return (
      <div className="bg-secondary min-h-screen">
        <NavBar/>
          {children}
        <Footer/>
      </div>
  );
}
