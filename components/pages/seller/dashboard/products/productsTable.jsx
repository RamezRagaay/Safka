"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"

import { getSellersProducts } from "@/services/products"
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { SkeletonBar } from "@/components/shared/skeletonBar"
import { DeleteItemAlert } from "./DeleteItemAlert"
import { useSearchParams } from "next/navigation"
import ProductsPagination from "@/components/pages/productsList/ProductsPagintaion"
import { EditProductSheet } from './EditProductSheet';

export default function ProductsTable() {
  const sellerId = Cookies.get("seller-id");
  const params = useSearchParams();
  const page = params.get("page") || 1;
  const [products, setProducts] = useState();
  const [totalPages, setTotalPages] = useState();
  const [totalItems, setTotalItems] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await getSellersProducts(sellerId, page)
      setProducts(res.products.items);
      setTotalPages(res.products.totalPages);
      setTotalItems(res.products.totalItems);
    }
    fetchProducts();
  }, [page, sellerId])

  return (
    <Card className="m-4 overflow-hidden">
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="hidden w-[100px] sm:table-cell">
                  <span className="sr-only">صورة المنتج</span>
                </TableHead>
                <TableHead className="text-right">اسم المنتج</TableHead>
                <TableHead className="text-right">Status</TableHead>
                <TableHead className="hidden md:table-cell text-right">السعر</TableHead>
                <TableHead className="hidden md:table-cell text-right">المخزون</TableHead>
                <TableHead className="hidden lg:table-cell text-right">تم إنشاؤه في</TableHead>
                <TableHead className="text-right">
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products ? products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="hidden sm:table-cell">
                    <Image
                      alt="Product image"
                      className="aspect-square rounded-md object-cover"
                      height="64"
                      src='/product-23.jpg'
                      width="64"
                    />
                  </TableCell>
                  <TableCell className="font-medium">
                    <div className="flex flex-col">
                      <span>{product.product_name}</span>
                      <span className="text-sm text-muted-foreground md:hidden">
                        {product.price} sar | {product.unit} {product.quantaty}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={
                      product.status
                        ? "bg-green-500 text-white w-full sm:w-auto flex justify-center"
                        : "bg-red-500 text-white w-full sm:w-auto flex justify-center"
                    }>
                      {product.status ? "مقبول" : "معلق"}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {product.price} sar
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {product.unit} {product.quantaty}
                  </TableCell>
                  <TableCell className="hidden lg:table-cell">
                    {product.created}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          aria-label="Actions"
                          size="icon"
                          variant="ghost"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem asChild>
                          <EditProductSheet prod_id={product.id} product={product} />
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <DeleteItemAlert id={product.id} />
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              )) : (
                <>
                  {[...Array(5)].map((_, index) => (
                    <TableRow key={index}>
                      <TableCell colSpan={7}>
                        <SkeletonBar />
                      </TableCell>
                    </TableRow>
                  ))}
                </>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-muted-foreground">
          عرض <strong>{(page - 1) * 5 + 1}-{Math.min(page * 5, totalItems)}</strong> من <strong>{totalItems}</strong> منتجات
        </div>
        <ProductsPagination totalPages={totalPages} />
      </CardFooter>
    </Card>
  )
}