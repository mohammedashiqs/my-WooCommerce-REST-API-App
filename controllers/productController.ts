import http from 'http'
import productService from '../services/productService'

export async function getProducts(params:object, res: http.ServerResponse) {
    
    try {
        const products = await productService.getProducts(params);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(products));
    } catch (error) {
       // console.log('Error: '+ error.message);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');

    }
}

