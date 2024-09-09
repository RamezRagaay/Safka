"use client"
import { Search } from 'lucide-react'
import { useState, useEffect } from 'react';
import { useDebounce } from './useDebounce';
import { searchProducts } from '@/services/products';

const SearchBar = ({className1, className2}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const debouncedSearchTerm = useDebounce(searchTerm, 1000);
    async function handleSearch() {
        try {
            const res = await searchProducts(debouncedSearchTerm);
            const results = res.products;
            return results; 
        } catch (error) {
            console.error('Error fetching products:', error);
            return []; 
        }

    }
    function truncateProductName(name, wordLimit) {
        const words = name.split(" ");
        
        if (words.length > wordLimit) {
          return words.slice(0, wordLimit).join(" ") + " ...";
        }
        
        return name;
      }
      

    useEffect(() => {
        if (debouncedSearchTerm) {
          setIsSearching(true);
          console.log("Searching for:", debouncedSearchTerm);
          handleSearch().then((results) => {
            setResults(results);              
          })
        }
    }, [debouncedSearchTerm]);
          
  return (
    <div className={`${className1} relative`}>
        <form className="" >
                <div className={className2}>
                <input
                    type="text"
                    onChange={e => setSearchTerm(e.target.value)}
                    placeholder="بحث..."
                    className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-right"
                    />
                <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <Search className="h-5 w-5 text-gray-400 hover:text-primary duration-300" />
                </button>
                </div>
        </form>
        {
        results.length > 0 &&
        <div className={` bg-white flex flex-col p-2 rounded-lg  z-50 absolute top-[44px] right-[10px] w-`}>
            {results.map((product) => (
                <div key={product.id} className='hover:bg-gray-200 p-2 border-b'>
                    {truncateProductName(product.product_name, 4)}
                </div>
            ))}
        </div>
        }
    </div>
    
    )
}

export default SearchBar