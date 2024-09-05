import PocketBase, { cookieParse } from 'pocketbase';

const pb = new PocketBase('http://ip-intel.gl.at.ply.gg:30265/');

pb.autoCancellation(false)
export const getProductsB2B = async () => {
    try {
        const products = await pb.collection('products_b2b').getFullList();
        return { products };
    } catch (error) {
        console.error(error);
        return { products: [] };
    }
}   

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