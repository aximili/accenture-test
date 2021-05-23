import React, { useState, useEffect, useMemo } from 'react';
import { getProducts } from 'api/productApi';
import { productUtil } from 'utils';
import { Filter, Product } from 'models';
import { ProductFilter, ProductTiles } from 'components/scenes';
import './ProductsPage.scss';

const ProductsPage = () => {

    const [products, setProducts] = useState<Product[] | null>(null);
    const [filter, setFilter] = useState({productType: '', query: ''});

    useEffect(() => {
        getProducts().then(setProducts);
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


    if (!products)
        return <>Loading products...</>;

    if (products.length === 0)
        return <>No products to show.</>;

    return (
        <div className='products-page'>

            <ProductFilter
                productTypes={productUtil.getUniqueTypes(products)}
                onChange={handleFilterChange}
            />

            <ProductTiles products={filteredProducts} />

        </div>
    );
};

export default ProductsPage;
