import { Product } from 'models';
import { parsePrice } from 'utils/currencyUtil';
import mockProducts from './mockProducts';

var mockApiDelay = 500;

/** Gets all products including their details */
export function getProducts(): Promise<Product[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            var products = mockProducts.map(p => ({
                ...p,
                priceText: p.price,
                price: parsePrice(p.price)
            }));
            resolve(products);
        }, mockApiDelay);
    });
}
