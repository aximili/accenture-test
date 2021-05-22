import React, { useState } from 'react';
import { Grid, Hidden } from '@material-ui/core';
import { Filter } from 'models';
import { Searchbox } from 'components/common';
import ProductTypeSelect from './ProductTypeSelect';
import './ProductFilter.scss';

type Props = {
    productTypes: string[],
    onChange: (filter: Filter) => void,
}

const ProductFilter = ({
    productTypes, onChange
}: Props) => {

    const [filter, setFilter] = useState({productType: '', query: ''});

    function handleTypeChange(productType: string) {
        let newFilter = {...filter, productType};
        setFilter(newFilter);
        onChange(newFilter);
    }

    function handleSearchChange(query: string) {
        let newFilter = {...filter, query};
        setFilter(newFilter);
        onChange(newFilter);
    }

    return (
        <div className='product-filter'>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductTypeSelect types={productTypes} value={filter.productType} onChange={handleTypeChange} />
                </Grid>
                <Hidden smDown>
                    <Grid item md={4} />
                </Hidden>
                <Grid item xs={12} sm={6} md={4}>
                    <Searchbox value={filter.query} onChange={handleSearchChange} />
                </Grid>
            </Grid>
        </div>
    );
};

export default ProductFilter;