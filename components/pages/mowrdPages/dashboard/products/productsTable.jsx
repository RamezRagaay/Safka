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

export default function ProductsTable(){

    const providerId = Cookies.get("provider-id");
    const [products, setProducts] = useState();
    useEffect(() => {
        let res;
        const fetchProducts = async () => {
            res = await getProvidersProductsB2B(providerId)
            setProducts(res.products.items);
            console.log("res", res.products.items);
        }
        fetchProducts();
    }, [])
    useEffect(() => {
        console.log("products: ", products);
    }, [products])
    return(     
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
            <TableCell className="font-medium">
                    {product.product_name}
            </TableCell>
            <TableCell>
                <Badge variant="outline">product.status</Badge>
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
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem >Edit</DropdownMenuItem>
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
        </>
        
        }
            {/* <TableRow>
            <TableCell className="hidden sm:table-cell">
                <Image
                alt="Product image"
                className="aspect-square rounded-md object-cover"
                height="64"
                src="/placeholder.svg"
                width="64"
                />
            </TableCell>
            <TableCell className="font-medium">
                Hypernova Headphones
            </TableCell>
            <TableCell>
                <Badge variant="outline">Active</Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell">
                $129.99
            </TableCell>
            <TableCell className="hidden md:table-cell">
                100
            </TableCell>
            <TableCell className="hidden md:table-cell">
                2023-10-18 03:21 PM
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
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
                </DropdownMenu>
            </TableCell>
            </TableRow>
            <TableRow>
            <TableCell className="hidden sm:table-cell">
                <Image
                alt="Product image"
                className="aspect-square rounded-md object-cover"
                height="64"
                src="/placeholder.svg"
                width="64"
                />
            </TableCell>
            <TableCell className="font-medium">
                AeroGlow Desk Lamp
            </TableCell>
            <TableCell>
                <Badge variant="outline">Active</Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell">
                $39.99
            </TableCell>
            <TableCell className="hidden md:table-cell">
                50
            </TableCell>
            <TableCell className="hidden md:table-cell">
                2023-11-29 08:15 AM
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
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
                </DropdownMenu>
            </TableCell>
            </TableRow>
            <TableRow>
            <TableCell className="hidden sm:table-cell">
                <Image
                alt="Product image"
                className="aspect-square rounded-md object-cover"
                height="64"
                src="/placeholder.svg"
                width="64"
                />
            </TableCell>
            <TableCell className="font-medium">
                TechTonic Energy Drink
            </TableCell>
            <TableCell>
                <Badge variant="secondary">Draft</Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell">
                $2.99
            </TableCell>
            <TableCell className="hidden md:table-cell">
                0
            </TableCell>
            <TableCell className="hidden md:table-cell">
                2023-12-25 11:59 PM
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
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
                </DropdownMenu>
            </TableCell>
            </TableRow>
            <TableRow>
            <TableCell className="hidden sm:table-cell">
                <Image
                alt="Product image"
                className="aspect-square rounded-md object-cover"
                height="64"
                src="/placeholder.svg"
                width="64"
                />
            </TableCell>
            <TableCell className="font-medium">
                Gamer Gear Pro Controller
            </TableCell>
            <TableCell>
                <Badge variant="outline">Active</Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell">
                $59.99
            </TableCell>
            <TableCell className="hidden md:table-cell">
                75
            </TableCell>
            <TableCell className="hidden md:table-cell">
                2024-01-01 12:00 AM
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
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
                </DropdownMenu>
            </TableCell>
            </TableRow>
            <TableRow>
            <TableCell className="hidden sm:table-cell">
                <Image
                alt="Product image"
                className="aspect-square rounded-md object-cover"
                height="64"
                src="/placeholder.svg"
                width="64"
                />
            </TableCell>
            <TableCell className="font-medium">
                Luminous VR Headset
            </TableCell>
            <TableCell>
                <Badge variant="outline">Active</Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell">
                $199.99
            </TableCell>
            <TableCell className="hidden md:table-cell">
                30
            </TableCell>
            <TableCell className="hidden md:table-cell">
                2024-02-14 02:14 PM
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
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
                </DropdownMenu>
            </TableCell>
            </TableRow> */}
        </TableBody>
        </Table>
        </CardContent>
    )
}
