import React from 'react'
import { Minus, Plus, ShoppingCart, Trash2 } from 'lucide-react'

const cartItems = [
  { id: 1, name: 'تيشيرت أبيض', price: 29.99, quantity: 2, image: '/product-23.jpg' },
  { id: 2, name: 'جينز أزرق', price: 59.99, quantity: 1, image: '/product-23.jpg' },
  { id: 3, name: 'حذاء رياضي', price: 89.99, quantity: 1, image: '/product-23.jpg' },
]

export default function CartScreen() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 10
  const total = subtotal + shipping

  return (
    <div dir="rtl" className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-8 text-center">سلة التسوق</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md p-6 mb-4 flex items-center">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                <div className="mr-4 flex-grow">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">{item.price.toFixed(2)} ريال</p>
                  <div className="flex items-center mt-2">
                    <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                      <Minus className="h-5 w-5" />
                    </button>
                    <span className="text-gray-700 mx-2">{item.quantity}</span>
                    <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                      <Plus className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div className="mr-4">
                  <p className="text-lg font-semibold">{(item.price * item.quantity).toFixed(2)} ريال</p>
                </div>
                <button className="text-red-500 focus:outline-none">
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
          <div className="md:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">ملخص الطلب</h2>
              <div className="flex justify-between mb-2">
                <span>المجموع الفرعي</span>
                <span>{subtotal.toFixed(2)} ريال</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>الشحن</span>
                <span>{shipping.toFixed(2)} ريال</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between mb-2 font-semibold">
                <span>الإجمالي</span>
                <span>{total.toFixed(2)} ريال</span>
              </div>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full hover:bg-blue-600 transition duration-300">
                الدفع <ShoppingCart className="inline-block mr-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}