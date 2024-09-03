import PocketBase from 'pocketbase';

const pb = new PocketBase('http://jun-truth.gl.at.ply.gg:31897');
pb.autoCancellation(false);
export const getProducts = async () => {
    try {
      const products = await pb.collection('products').getFullList();
      return { products };
    } catch (error) {
      console.error(error);
      return { products: [] }; 
    }
}

export const getProduct = async (id) => {
    try {

        const product = await pb.collection('products').getOne(id);
        
        return { product };
    } catch (error) {
        console.error('Error fetching product:', error);
        return { product: null };
    }
}
