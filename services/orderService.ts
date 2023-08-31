import WooCommerce from "../utils/woocommerce";
import Order from "../models/orderModel";

async function getOrders(params:object){
    try {
        
        const ordersResponse = await WooCommerce.get('orders',params)
        console.log("orders: ", ordersResponse.data)
        return ordersResponse.data

    } catch (error) {
        throw new Error('Error fetching orders')
    }
    
}


export default {getOrders};