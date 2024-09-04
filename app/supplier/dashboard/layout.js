import Sidebar from "@/components/pages/mowrdPages/dashboard/sidebar";

export default function RootLayout({ children }) {
    return (
      <div className="min-h-screen flex">
        <Sidebar/>
        {children}
      </div>
  );
}
