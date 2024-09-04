import PocketBase, { cookieParse } from 'pocketbase';

const pb = new PocketBase('http://ip-intel.gl.at.ply.gg:30265/');


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

