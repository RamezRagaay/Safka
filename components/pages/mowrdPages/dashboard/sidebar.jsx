"use client"
import Link from "next/link"
import {useState, useEffect} from "react"
export default function Sidebar({pathname}) {

  const [isOpen, setIsOpen] = useState("")
  const handleClick = (id) => {
    setIsOpen(id)
  }

  useEffect(() => {
    const path = pathname.split("/");
    // console.log(path);
    if(path.length === 3){
      // console.log("path: ", path);
      setIsOpen("dashboard")
    }
    else{
      // console.log("path[3]", path[3]);
      setIsOpen(path[3])
    }
  }, [pathname])

  return (
    <aside className="inset-y-0 right-0 z-10 flex h-screen w-64 flex-col border-l bg-background">
      <div className="flex h-16 shrink-0 items-center justify-between border-b px-4">
        <Link href="#" className="flex items-center gap-2 font-semibold" prefetch={false}>
          <Package2Icon className="h-6 w-6" />
          <span className="text-2xl">صفقه</span>
        </Link>
      </div>
      <div className="flex-1 overflow-y-auto px-2 py-4">
        <nav className="grid gap-2">
          <Link
            href="/supplier/dashboard"
            onClick={() => handleClick("dashboard")}
            className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground cursor-pointer ${isOpen === "dashboard" ? "bg-primary hover:bg-primary/90" : ""}`}
            prefetch={false}
          >
            <HomeIcon className="h-5 w-5" />
            <span>لوحة القيادة</span>
          </Link>
          <Link
            href="/supplier/dashboard/products"
            onClick={() => handleClick("products")}
            className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground cursor-pointer ${isOpen === "products" ? "bg-primary hover:bg-primary/90" : ""}`}
            prefetch={false}
          >
            <PackageIcon className="h-5 w-5" />
            <span>المنتجات</span>
          </Link>
            <Link
                href="#"
            onClick={() => handleClick("orders")}
            className={`flex items-center gap-3 rounded-md  px-3 py-2 text-sm font-medium text-primary-foreground transition-colors cursor-pointer ${isOpen === "orders" ? "bg-primary hover:bg-primary/90" : ""}`}
            prefetch={false}
          >
            <ShoppingCartIcon className="h-5 w-5" />
            <span>الطلبات</span>
          </Link>
          
          <Link
            href="#"
            onClick={() => handleClick("suppliers")}
            className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground cursor-pointer ${isOpen === "suppliers" ? "bg-primary hover:bg-primary/90" : ""}`}
            prefetch={false}
          >
            <UsersIcon className="h-5 w-5" />
            <span>التجار</span>
          </Link>
          <Link
            href="#"
            onClick={() => handleClick("settings")}
            className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground cursor-pointer ${isOpen === "settings" ? "bg-primary hover:bg-primary/90" : ""}`}
            prefetch={false}
          >
            <SettingsIcon className="h-5 w-5" />
            <span>الاعدادات</span>
          </Link>
        </nav>
      </div>
    </aside>
  )
}

function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function Package2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}


function PackageIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}


function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}