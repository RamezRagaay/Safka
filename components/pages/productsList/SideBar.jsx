import React from 'react'
import CategoriesFilter from './CategoriesFilter'
import SortFilter from './SortFilter'
import PriceFilter from './PriceFilter'

const SideBar = () => {
	return (
		<div className='flex flex-col gap-2 border w-60' >
			<SortFilter/>
			<hr />
			<CategoriesFilter />
			<hr />
			<PriceFilter/>
		</div>
	)
}

export default SideBar