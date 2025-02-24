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

import { deleteProductB2B, getProvidersProductsB2B } from "@/services/products_b2b"
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { SkeletonBar } from "@/components/shared/skeletonBar"
import { DeleteItemAlert } from "./DeleteItemAlert"
import { Pagination } from "@/components/ui/pagination"
import { useSearchParams } from "next/navigation"
import ProductsPagination from "@/components/pages/productsList/ProductsPagintaion"
import { EditProductSheet } from './EditProductSheet';
export default function ProductsTable(){

    const providerId = Cookies.get("provider-id");
    const params = useSearchParams();
    const page = params.get("page") || 1;
    const [products, setProducts] = useState();
    const [totalPages, setTotalPages] = useState();
    const [totalItems, setTotalItems] = useState();
    useEffect(() => {
        let res;
        const fetchProducts = async () => {
            res = await getProvidersProductsB2B(providerId, page)
            setProducts(res.products.items);
            setTotalPages(res.products.totalPages);
            setTotalItems(res.products.totalItems);
            console.log("res", res);
        }
        fetchProducts();
    }, [page])
    useEffect(() => {
        console.log("products: ", products);
    }, [products])
    useEffect(() => {
        console.log("page: ", page);
    }, [page])
    return(     
        <Card className="m-4">
            <CardContent>
            <Table>
            <TableHeader>
                <TableRow>
                <TableHead className="hidden w-[100px] sm:table-cell">
                    <span className="sr-only">صورة المنتج</span>
                </TableHead>
                <TableHead className="text-right">اسم المنتج</TableHead>
                <TableHead className="text-right">Status</TableHead>
                <TableHead className="hidden md:table-cell text-right">
                    السعر
                </TableHead>
                <TableHead className="hidden md:table-cell text-right">
                    المخزون
                </TableHead>
                <TableHead className="hidden md:table-cell text-right">
                تم إنشاؤه في
                </TableHead>
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
                <TableCell className="font-medium min-h-[100px]">
                        {product.product_name}
                </TableCell>
                <TableCell>
                <Badge variant="outline" className=
                    {
                        product?.status ? "bg-green-500 text-white w-1/2 flex justify-center " 
                        :
                        "bg-red-500 text-white flex justify-center w-1/2"
                    }>{
                    product.status ?
                    "مقبول" : "معلق"
                    }</Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                    {product.price_per_unit} sar
                </TableCell>
                <TableCell className="hidden md:table-cell" >
                    {product.unit} {product.quantaty}  
                </TableCell>
                <TableCell className="hidden md:table-cell">
                    {product.created}
                </TableCell>
                <TableCell>
                    <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                        aria-haspopup="true"
                        size="icon"
                        variant="ghost"
                        >
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center" className="flex flex-col">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem asChild><EditProductSheet prod_id={product.id} product={product}/></DropdownMenuItem>
                        <DropdownMenuItem asChild><DeleteItemAlert id={product.id}/></DropdownMenuItem>
                    </DropdownMenuContent>
                    </DropdownMenu>
                </TableCell>
                </TableRow>
                
            )) : 
            <>
                <TableRow><TableCell><SkeletonBar/></TableCell></TableRow>
                <TableRow><TableCell><SkeletonBar/></TableCell></TableRow>
                <TableRow><TableCell><SkeletonBar/></TableCell></TableRow>
                <TableRow><TableCell><SkeletonBar/></TableCell></TableRow>
                <TableRow><TableCell><SkeletonBar/></TableCell></TableRow>
            </>
            
            }
            </TableBody>
            </Table>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row justify-between items-center">
                <div className="text-xs text-muted-foreground gap-1">
                عرض <strong className="ml-1">
                    {(page-1) * 5 + 1}-{page * 5 > totalItems ? totalItems : page * 5 }
                    </strong>
                     من 
                    <strong className="mr-1">{totalItems}</strong>{" "}
                منتجات
                </div>
                <div className="mt-2 sm:mt-0">
                    <ProductsPagination totalPages={totalPages} />
                </div>
            </CardFooter>
        </Card>
    )
}
