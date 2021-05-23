import React from 'react';
import classNames from 'classnames';
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
                <div>{product.productName}</div>
                <div className={classNames('price', {'sale': product.isSale})}>
                    {product.priceText}
                </div>
            </div>
        </Card>
    );
};

export default ProductTile;