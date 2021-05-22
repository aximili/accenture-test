import React, { ChangeEvent } from 'react';
import classNames from 'classnames';
import { InputAdornment, TextFieldProps, TextField } from '@material-ui/core';
import * as Icons from '@material-ui/icons';

type Props = Omit<TextFieldProps, 'onChange'> & {
    label?: string,
    onChange: (query: string) => void,
}

const Searchbox = ({
    label='Search', onChange,
    className, ...props  // TextFieldProps
}: Props) => {

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        onChange(e.currentTarget.value);
    }

    return (
        <TextField
            fullWidth
            variant='outlined'
            className={classNames('searchbox', className)}
            label={label}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <Icons.Search />
                    </InputAdornment>
                )
            }}
            onChange={handleChange}
            {...props}
        />
    );
};

export default Searchbox;