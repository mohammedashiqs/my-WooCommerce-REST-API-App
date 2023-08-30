import http, { IncomingMessage, ServerResponse } from 'http'; //to extract query paramters from url (for filtering, sorting, and pagination)
import { getOrders } from '../controllers/orderController'



async function orderRoute(req: IncomingMessage, res: ServerResponse) {


    if (req.method === 'GET') {
        // Extract query parameters from 'url constructor' //for filterign, sorting and pagination
        const myUrl = new URL(req.url || '', `http://${req.headers.host}`);
        const queryParams = myUrl.searchParams;
        let params: any = {};

        params.pageSize = (queryParams.get('pageSize')) || 5
        params.page = queryParams.get('page') || 1
        params.order = queryParams.get('order') || "asc"
        params.orderBy = queryParams.get('orderby') || "date"

        if (queryParams.get('dateFrom')) params.dateFrom = queryParams.get('dateFrom');
        if (queryParams.get('dateTo')) params.dateTo = queryParams.get('dateTo');


        await getOrders(params, res);
    } else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Method Not Allowed');
    }



}

export default orderRoute;