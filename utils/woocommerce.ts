import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'


const WooCommerce = new WooCommerceRestApi({
    url: 'https://ninjashop.in',
    consumerKey: 'ck_bcc829bb7da7954f7487748a9963e966cef16c71',
    consumerSecret: 'cs_0e50ba69c14687741ff1252295d26eb70368e94d',
    version: 'wc/v3'
})


export default WooCommerce;