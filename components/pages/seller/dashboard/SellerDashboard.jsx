'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { DollarSign, Package, TrendingUp, TrendingDown, ShoppingBag } from "lucide-react"
import Link from 'next/link'
import { Button } from '@/components/ui/button'

// Mock data - replace with actual API calls in a real application
const mockData = {
  monthlyRevenue: 15000,
  totalIncome: 75000,
  totalOutcome: 25000,
  topProducts: [
    { name: "المنتج أ", sales: 120 },
    { name: "المنتج ب", sales: 80 },
    { name: "المنتج ج", sales: 70 },
    { name: "المنتج د", sales: 50 },
    { name: "المنتج هـ", sales: 30 },
  ],
  monthlySales: [
    { month: "يناير", sales: 4000 },
    { month: "فبراير", sales: 3000 },
    { month: "مارس", sales: 5000 },
    { month: "أبريل", sales: 4500 },
    { month: "مايو", sales: 1000 },
  ],
}

export default function SellerDashboard() {
  const [data, setData] = useState(mockData)

  useEffect(() => {
    // Replace this with an actual API call in a real application
    setData(mockData)
  }, [])

  return (
    <div className="p-4 space-y-4 rtl" dir="rtl">
      <h1 className="text-2xl font-bold">لوحة تحكم البائع</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="الإيرادات الشهرية"
          value={`${data.monthlyRevenue.toLocaleString()} ريال`}
          icon={"ريال"}
        />
        <StatCard
          title="إجمالي الدخل"
          value={`${data.totalIncome.toLocaleString()} ريال`}
          icon={<TrendingUp className="h-4 w-4 text-muted-foreground" />}
        />
        <StatCard
          title="إجمالي المصروفات"
          value={`${data.totalOutcome.toLocaleString()} ريال`}
          icon={<TrendingDown className="h-4 w-4 text-muted-foreground" />}
        />
        <StatCard
          title="صافي الربح"
          value={`${(data.totalIncome - data.totalOutcome).toLocaleString()} ريال`}
          icon={"ريال"}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>المبيعات الشهرية</CardTitle>
          </CardHeader>
          <CardContent className="text-left" dir="ltr">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data.monthlySales}>
                <XAxis dataKey="month" />
                <YAxis />
                <Bar dataKey="sales" fill="#FE9800" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>أعلى المنتجات مبيعًا</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col h-[300px]">
            <div className="flex-grow overflow-auto">
                <ul className="space-y-2">
                {data.topProducts.map((product, index) => (
                    <li key={index} className="flex justify-between items-center">
                    <span className="flex items-center">
                        <Package className="h-4 w-4 ml-2 text-muted-foreground" />
                        {product.name}
                    </span>
                    <span className="font-semibold">{product.sales} مبيعات</span>
                    </li>
                ))}
                </ul>
            </div>
            <div className="pt-4 mt-auto">
                <Link href="/seller/dashboard/products" passHref>
                <Button className="w-full text-lg py-3" size="lg">
                    <ShoppingBag className="ml-2 h-6 w-6" />
                    الذهاب إلى منتجاتك
                </Button>
                </Link>
            </div>
            </CardContent>
        </Card>

      </div>
    </div>
  )
}

function StatCard({ title, value, icon }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  )
}