import React from 'react';
import { Card } from '@material-ui/core';
import { productUtil } from 'utils';
import { Product } from 'models';
import './ProductTile.scss';
import Image from 'components/common/Image';

type Props = {
    product: Product,
}

const ProductTile = ({
    product
}: Props) => {

    const NO_IMG_URL = '/images/no-image.png';

    return (
        <Card elevation={3} className='product-tile'>
            {product.isSale &&
                <div className='sale-banner'>Sale</div>
            }

            <div className='image-wrapper'>
                <Image
                    src={productUtil.getImageUrl(product)}
                    fallbackSrc={NO_IMG_URL}
                    alt={product.productName}
                />
            </div>

            <div className='product-details'>
                <div className='name'>{product.productName}</div>
                <div className='price'>{product.priceText}</div>
            </div>
        </Card>
    );
};

export default ProductTile;