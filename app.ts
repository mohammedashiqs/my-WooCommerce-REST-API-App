import http from 'http'
import dotenv from 'dotenv'
dotenv.config()

import { productRoute } from './routes/productsRoutes';
import orderRoute from './routes/ordersRoutes'

dotenv.config()

const server = http.createServer((req, res) => {


    if (req.url?.startsWith('/products')) {
        productRoute(req, res);
    } else if (req.url?.startsWith('/orders')) {
        orderRoute(req, res);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        console.log(req.url)
        res.end('Not Found');
    }


    
})



const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
});
