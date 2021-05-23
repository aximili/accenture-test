import React from 'react';
import { } from '@material-ui/core';
import { Product } from 'models';
import './ProductTiles.scss';
import ProductTile from './ProductTile';

type Props = {
    products: Product[],
}

const ProductTiles = ({
    products
}: Props) => {

    return (
        <div className='product-tiles'>
            {products.map(p => (
                <ProductTile key={p.index} product={p} />
            ))}
        </div>
    );
};

export default ProductTiles;