import PocketBase, { cookieParse } from 'pocketbase';

const pb = new PocketBase(process.env.NEXT_PUBLIC_PB_API);


pb.autoCancellation(false)


// export const getProductsB2B = async () => {
//     try {
//         const products = await pb.collection('products_b2b').getFullList();
//         return { products };
//     } catch (error) {
//         console.error(error);
//         return { products: [] };
//     }
// }   

export const searchProductsB2B = async (query) => {
  try {
    const products = await pb.collection('products_b2b').getFullList({
      filter: `product_name ~ "${query}" || description ~ "${query}"`,
      page: 1,
      perPage: 10
    });
    return { products };
  } catch (error) {
    console.error(error);
    return { products: [] };
  }
}

export const getProductsB2B = async (params) => {
  try {
    const products = await pb.collection('products_b2b').getList(params.page, params.perPage, {
      sort: params.sort,
      filter: params.filter,
      expand: params.expand
    });
    return { products };
  } 
	catch (error) {
    console.error(error);
    return { products: [] };
  }
};





export const getProductB2BById = async (id) => {
    try {
        const product = await pb.collection('products_b2b').getOne(id);
        return { product };
    } catch (error) {
        console.error(error);
        return { product: [] };
    }
}   

export const getProvidersProductsB2B = async (id, page) => {
    try {
        const perPage = 5;
        const currPage = parseInt(page) || 1;
        // console.log(currPage);
        const products = await pb.collection('products_b2b').getList(currPage, perPage, {
            filter: `provider = "${id}"`,
            // filter: 'price_per_unit >=100 && price_per_unit <= 500 && category = "elecronics"'
        });
        return { products };
    } catch (error) {
        console.error(error);
        return { products: [] };
    }
}

export const deleteProductB2B = async (id) => {
    try {
        const product = await pb.collection('products_b2b').delete(id);
        return { product };
    } catch (error) {
        console.error(error);
        return { product: [] };
    }
}

export const updateProductB2B = async (id, data) => {
    try {
        console.log("id: " , id);
        
        const product = await pb.collection('products_b2b').update(id, data);
        return { product };
    } catch (error) {
        console.error(error);
        return { product: [] };
    }
}

export const createProductB2B = async (data) => {
    try {
        const product = await pb.collection('products_b2b').create(data);
        return { product };
    } catch (error) {
        console.error(error);
        return { product: [] };
    }
}