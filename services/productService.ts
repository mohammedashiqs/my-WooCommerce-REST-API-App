import WooCommerce from '../utils/woocommerce';
import Product from '../models/productModel';

async function getProducts(params:object) {
    try {
        const productsResponse = await WooCommerce.get('products', params);
        console.log("Products: ", productsResponse.data)
        return productsResponse.data
        
    } catch (error) {
        throw new Error('Error fetching products')
    }

}



export default { getProducts }