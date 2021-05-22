import React, { ChangeEvent } from 'react';
import { } from '@material-ui/core';
import { Select, MenuItem } from 'components/common';

type Props = {
    types: string[],
    value: string,
    onChange?: (type: string) => void,
}

const ProductTypeSelect = ({
    types, value, onChange
}: Props) => {

    function handleChange(e: ChangeEvent<{value: unknown}>) {
        if(!onChange)
            return;
        if(typeof e.target.value !== 'string')
            throw new Error('Unhandled type');  // Product type is string, this should never happen

        onChange(e.target.value);
    }

    return (
        <Select
            className='product-type-select'
            label='Product type'
            value={value}
            onChange={handleChange}
        >
            <MenuItem value=''>All</MenuItem>
            {types.map((t, idx) => (
                <MenuItem key={idx} value={t}>{t}</MenuItem>
            ))}
        </Select>
    );
};

export default ProductTypeSelect;