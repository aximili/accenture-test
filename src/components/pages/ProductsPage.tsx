import React, { useState, useEffect } from 'react';
import { getProducts } from 'api/productApi';
import { Product } from 'models';

const ProductsPage = () => {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        let allProducts = getProducts();
        setProducts(allProducts);
    }, []);

    return (
        <div className='products-page'>
            <ul>
                {products.map(p => (
                    <li key={p.index}>{p.productName}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductsPage;
