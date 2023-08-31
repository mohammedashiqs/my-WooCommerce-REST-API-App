import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'



const WooCommerce = new WooCommerceRestApi({
    url: 'https://ninjashop.in',
    consumerKey:  process.env.CONSUMER_KEY || '',
    consumerSecret: process.env.CONSUMER_SECRET || '',
    version: 'wc/v3'
})




export default WooCommerce;