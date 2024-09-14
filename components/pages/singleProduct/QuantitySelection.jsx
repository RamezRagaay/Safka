'use client'
import React, {useState} from 'react'
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {Minus, Plus } from 'lucide-react'

const QuantitySelection = ({maxQuantity}) => {
    const [quantity, setQuantity] = useState(1)
  return (
    <div className="flex items-center mb-6 gap-2">
        <Label htmlFor="quantity" className="mr-2">الكمية:</Label>
        <div className="flex items-center">
            <Button
            variant="outline"
            size="icon"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
            <Minus className="h-4 w-4" />
            </Button>
            <Input
            type="number"
            id="quantity"
            Value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            className="w-16 text-center mx-2"
            />
            <Button
            variant="outline"
            size="icon"
            onClick={() => setQuantity(Math.min(maxQuantity, quantity + 1))}
            >
            <Plus className="h-4 w-4" />
            </Button>
        </div>
    </div>
  )
}

export default QuantitySelection