import React from 'react';
import renderer from 'react-test-renderer';
import { Searchbox } from '.';

test('Renders Searchbox DOM', () => {
    const dom = renderer.create(
        <Searchbox onChange={() => {}} />
    ).toJSON();

    expect(dom).toMatchSnapshot();
});