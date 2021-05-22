import React from 'react';
import classNames from 'classnames';
import { FormControl, InputLabel, Select as MuiSelect, SelectProps as MuiSelectProps } from '@material-ui/core';

type Props = MuiSelectProps & {
    label?: string,
}

const Select = ({
    label, className, ...props
}: Props) => {
    return (
        <FormControl
            fullWidth
            variant='outlined'
            className={classNames('select', className)}
        >
            {label && <InputLabel>{label}</InputLabel>}
            <MuiSelect {...props} />
        </FormControl>
    );
};

export default Select;