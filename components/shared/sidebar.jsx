'use client'

import { HomeIcon, Package2Icon, PackageIcon, SettingsIcon } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Sidebar({ pathname }) {
  const [isOpen, setIsOpen] = useState("")
  const [p, setP] = useState("")

  useEffect(() => {
    const path = pathname.split("/")
    const newP = path[1]
    setP(newP)

    if (path.length === 3) {
      setIsOpen("dashboard")
    } else {
      setIsOpen(path[3])
    }
  }, [pathname])

  const handleClick = (id) => {
    setIsOpen(id)
  }

  const navItems = [
    { id: "dashboard", href: `/${p}/dashboard`, icon: <HomeIcon className="h-5 w-5" />, label: "بياناتك" },
    { id: "products", href: `/${p}/dashboard/products`, icon: <PackageIcon className="h-5 w-5" />, label: "المنتجات" },
    { id: "settings", href: `/${p}/dashboard/settings`, icon: <SettingsIcon className="h-5 w-5" />, label: "الاعدادات" },
  ]

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden sm:flex w-64 h-screen flex-col border-r bg-background">
        <div className="flex h-16 shrink-0 items-center justify-between border-b px-4">
          <Link href="#" className="flex items-center gap-2 font-semibold" prefetch={false}>
            <Package2Icon className="h-6 w-6" />
            <span className="text-2xl">صفقه</span>
          </Link>
        </div>
        <div className="flex-1 overflow-y-auto px-2 py-4">
          <nav className="grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => handleClick(item.id)}
                className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground cursor-pointer ${
                  isOpen === item.id ? "bg-primary hover:bg-primary/90" : ""
                }`}
                prefetch={false}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {/* Mobile Bottom Navbar */}
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 z-10 flex justify-around bg-white border-t p-2">
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            onClick={() => handleClick(item.id)}
            className={`flex flex-col items-center p-2 rounded-md ${
              isOpen === item.id ? "text-primary" : "text-foreground"
            }`}
            prefetch={false}
          >
            {item.icon}
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        ))}
      </nav>
    </>
  )
}

