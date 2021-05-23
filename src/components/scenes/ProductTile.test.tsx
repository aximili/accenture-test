import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTile } from '.';

test('Renders Product not on sale', () => {
    const product = {
        index: 0,
        isSale: false,
        priceText: "$49.99",
        productImage: "noimage.jpg",
        productName: "Pure Blonde Crate",
        type: "Beer"
    };

    const dom = renderer.create(
        <ProductTile product={product} />
    ).toJSON();

    expect(dom).toMatchSnapshot();
});

test('Renders Product on sale', () => {
    const product = {
        index: 0,
        isSale: true,
        priceText: "$49.99",
        productImage: "noimage.jpg",
        productName: "Pure Blonde Crate",
        type: "Beer"
    };

    const dom = renderer.create(
        <ProductTile product={product} />
    ).toJSON();

    expect(dom).toMatchSnapshot();
});