import ProductsList from '@/components/pages/productsList/ProductsList'
import React, { Suspense } from 'react'

const page = () => {
	return (
		<div>
			<Suspense>
				<ProductsList />
			</Suspense> 
		</div>
	)
}

export default page
