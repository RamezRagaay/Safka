import React from 'react'
import CategoriesFilter from '@/components/pages/productsList/CategoriesFilter'
import PriceFilter from '@/components/pages/productsList/PriceFilter'
import SortB2BFilter from './SortB2Bfilter'

const SideBar = () => {
	return (
		<div className='flex flex-col gap-2 border' >
			<SortB2BFilter/>
			<hr />
			<CategoriesFilter />
			<hr />
			<PriceFilter/>
		</div>
	)
}

export default SideBar