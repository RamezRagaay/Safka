import PocketBase from 'pocketbase';


const pb = new PocketBase('https://round-feather-2cdc.safka-middlewares-v0.workers.dev/');

pb.autoCancellation(false);
export const getAllProducts = async () => {
    try {
      const products = await pb.collection('products').getFullList();
      return { products };
    } catch (error) {
      console.error(error);
      return { products: [] }; 
    }
}

export const getProducts = async (params) => {
  try {
    const products = await pb.collection('products').getList(params.page, params.perPage, {
      sort: params.sort || "",
      filter: params.filter || "",
      expand: "seller_id",
      fields: "*,description:excerpt(200,true)"
    });
    return { products };
  } catch (error) {
    console.error(error);
    return { products: [] };
  }
};

export const searchProducts = async (query) => {
  try {
    const products = await pb.collection('products').getFullList({
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

export const getSellersProducts = async (id, page) => {
  try {
      const perPage = 5;
      const currPage = parseInt(page) || 1;
      // console.log(currPage);
      const products = await pb.collection('products').getList(currPage, perPage, {
          filter: `seller_id = "${id}"`,
          // filter: 'price_per_unit >=100 && price_per_unit <= 500 && category = "elecronics"'
      });
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

export const createProduct = async (product) => {
  // TODO: validate product
  // "product_name": "test",
  // "quantaty": "test",
  // "unit": "test",
  // "price": 123,
  // "seller_id": "RELATION_RECORD_ID",
  // "category": "test",
  // "description": "test"
  try {
    const createdProduct = await pb.collection('products').create(product);
    return { product: createdProduct };
  } catch (error) {
    console.error('Error creating product:', error);
    return { product: null };
  }
}

export const updateProduct = async (id, product) => {
  // "product_name": "test",
  // "quantaty": "test",
  // "unit": "test",
  // "price": 123,
  // "seller_id": "RELATION_RECORD_ID",
  // "category": "test",
  // "description": "test"
  // id : string
  try {
    const updatedProduct = await pb.collection('products').update(id, product);
    return { product: updatedProduct };
  } catch (error) {
    console.error('Error updating product:', error);
    return { product: null };
  }
}

export const deleteProduct = async (id) => {
  try {
    await pb.collection('products').delete(id);
    return { success: true };
  } catch (error) {
    console.error('Error deleting product:', error);
    return { success: false };
  }
}

