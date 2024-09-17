'use client'

import { Search } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useDebounce } from '@/components/shared/useDebounce'
import Link from 'next/link'
import { useSearchParams, useRouter } from 'next/navigation'
import { searchProductsB2B } from '@/services/products_b2b'

export default function SearchBarB2B({ className = "" }) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('')
  const [submit, setSubmit] = useState(false)
  const [results, setResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const debouncedSearchTerm = useDebounce(searchTerm, 1000)
  const searchParams = useSearchParams();
  
  const handleSearchButton = (value) => {
    console.log(value);
    setSubmit(true);
    const current = new URLSearchParams(searchParams);
    current.delete('_rsc');
    if (value) {
      current.set('search', value);
      current.delete('page');
    }
    else {
      current.delete('search');
      current.delete('page');
    }
    router.push(`/seller/products/?${current.toString()}`);
  };
  async function handleSearch() {
    if (!debouncedSearchTerm) {
      setResults([])
      return
    }

    setIsSearching(true)
    try {
      const res = await searchProductsB2B(debouncedSearchTerm)
      setResults(res.products || [])
    } catch (error) {
      console.error('Error fetching products:', error)
      setResults([])
    } finally {
      setIsSearching(false)
    }
  }



  function truncateProductName(name, wordLimit) {
    const words = name.split(" ")
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + " ..."
    }
    return name
  }

  useEffect(() => {
    handleSearch()
  }, [debouncedSearchTerm])

  return (
    <div className={`relative ${className}`}>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSearchButton(searchTerm);
      }} className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {setSearchTerm(e.target.value);
            setSubmit(false);
          }}
          placeholder="بحث..."
          className="w-full px-4 py-2 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-right"
        />
        <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2" >
          <Search className="h-5 w-5 text-gray-400 hover:text-primary duration-300" />
        </button>
      </form>
      {isSearching && (
        <div className="absolute top-full mt-2 w-full text-center py-2 bg-white rounded-lg shadow z-50">
          جاري البحث...
        </div>
      )}
      {!isSearching && results.length > 0 && !submit && (
        <div className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-lg overflow-hidden z-50">
          {
					results.map((product) => (
            <Link
              key={product.id}
              href={`/seller/products/${product.id}`}
              className="block hover:bg-gray-100 p-2 transition duration-150 ease-in-out"
            >
              <div className="flex items-center">
                {/* <img
                  src={product.image_url || '/placeholder.svg'}
                  alt={product.product_name}
                  className="w-10 h-10 object-cover rounded mr-3"
                /> */}
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    {truncateProductName(product.product_name, 4)}
                  </div>
                  <div className="text-sm text-gray-500">{product.price_per_unit} ريال</div>
                </div>
              </div>
            </Link>
          	))
					}
        </div>
      )}
    </div>
  )
}