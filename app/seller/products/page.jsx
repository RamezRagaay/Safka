import ProductsList from '@/components/pages/seller/productsB2BList/ProductsB2BList'
import React from 'react'

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