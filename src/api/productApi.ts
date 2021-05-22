import { Product } from 'models';
import { parsePrice } from 'utils/currencyUtil';
import mockProducts from './mockProducts';

/** Returns all products including their details */
export function getProducts(): Product[] {
    return mockProducts.map(p => ({
        ...p,
        price: parsePrice(p.price)
    }));
}
