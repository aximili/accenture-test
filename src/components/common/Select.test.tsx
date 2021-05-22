import React from 'react';
import renderer from 'react-test-renderer';
import { Select, MenuItem } from '.';

test('Renders Select DOM', () => {
    const dom = renderer.create(
        <Select>
            <MenuItem value={1}>One</MenuItem>
            <MenuItem value={2}>Two</MenuItem>
        </Select>
    ).toJSON();

    expect(dom).toMatchSnapshot();
});