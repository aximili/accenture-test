import React, { useState, useEffect, useMemo } from 'react';
import {  } from '@material-ui/core';
import { getProducts } from 'api/productApi';
import { Filter, Product } from 'models';
import './ProductsPage.scss';
import { ProductFilter } from 'components/scenes';
import { productUtil } from 'utils';

const ProductsPage = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const [filter, setFilter] = useState({productType: '', query: ''});

    const productTypes = productUtil.getUniqueTypes(products);

    useEffect(() => {
        let allProducts = getProducts();
        setProducts(allProducts);
    }, []);

    const filteredProducts = useMemo(() => {
        let filteredProducts = JSON.parse(JSON.stringify(products)) as Product[];
        if(filter.productType) {
            filteredProducts = filteredProducts.filter(p => p.type === filter.productType);
        }
        if(filter.query) {
            filteredProducts = filteredProducts.filter(p => ~p.productName.toLowerCase().indexOf(filter.query.toLowerCase()));
        }
        return filteredProducts;
    }, [products, filter]);
    // Note: useMemo is an overkill here because this Products page is over simplified.
    //       In real life when a lot of other things are happening this could improve performance.

    function handleFilterChange(value: Filter) {
        console.log('Filter =', value)
        setFilter(value);
    }

    return (
        <div className='products-page'>
            <ProductFilter productTypes={productTypes} onChange={handleFilterChange} />
            <ul>
                {filteredProducts.map(p => (
                    <li key={p.index}>{p.productName}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductsPage;
