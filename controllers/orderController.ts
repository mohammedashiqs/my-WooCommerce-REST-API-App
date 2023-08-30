import http from 'http';
import orderService from '../services/orderService';


export async function getOrders(params: object, res: http.ServerResponse) {
    
    try {
        
        const orders = await orderService.getOrders(params);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(orders));

    } catch (error) {
        //console.log("Error: " + error.message); it will show error in compile time
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
    }
}

