import { getProduct } from '@/services/products';


export const GET = async (req, { params })=>{
    const { id } = params;
    try {    
     const { product } = await getProduct(id);
     if(!product) return new Response.json({status: 404, error: 'Product not found'})
     return Response.json({status:200, product})
  } catch (error) {
     return new Response.json({error})
  }
}




