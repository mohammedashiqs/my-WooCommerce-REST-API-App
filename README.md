# MY-WOOCOMMERCE-REST-API-APP (127.0.0.1:3000)


1. Local node js application, List all orders(print to console) from Woocommerce shop placed between 12 DEC 2022 to 29 DEC 2022 and get result in ascending order by created at date. Implemented pagination with each page of limit 5.

2. We can Query all products available in the shop and get result items ordered by title in ascending order.

3. The app developed using Node.Js only

4. This app is developed according to the following technical aspects
- Code quality 
- Accuracy
- Readability
- Modularity




## Appendix

Developed using Node js, Typescript



## Authors

- [@Mohammed Ashiq](https://github.com/mohammedashiqs)


## Deployment

To deploy this project run

```bash
  npm start
```
## API Reference
https://woocommerce.github.io/woocommerce-rest-api-docs/?javascript#introduction


## Routing
1. ordersRouters
2. productsRouter

## I Order Module
-------------------

1. To view all orders

   description: Fetches a list of all orders available
   url: http://127.0.0.1:3000/orders
   method: get
   params: dateFrom, dateTo, page, pageSize, order, orderby

## II Product Module
-------------------

2. To view all products in a available
   
   description: Fetches a list of all products available.
   url: http://127.0.0.1:3000/products
   method: get
   params: order, orderby
