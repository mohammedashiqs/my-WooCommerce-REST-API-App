import http from 'http';
import { getProducts } from '../controllers/productController'



export async function productRoute(req: http.IncomingMessage, res: http.ServerResponse) {



    if (req.method === 'GET') {
        // Extract query parameters from 'url constructor' //for filterign, sorting and pagination
        const myUrl = new URL(req.url || '', `http://${req.headers.host}`);
        const queryParams = myUrl.searchParams;
        let params: any = {};

        params.order = (queryParams.get('order')) || 'asc'
        params.orderby = (queryParams.get('orderby')) || 'title'


        

        await getProducts(params, res);
    } else {
        methodNotAllowed(res);
    }


    function methodNotAllowed(res: http.ServerResponse) {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Method Not Allowed');
    }

}