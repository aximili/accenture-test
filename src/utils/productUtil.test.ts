import { getUniqueTypes } from './productUtil';

test('getUniqueTypes gets distinct types', () => {
    let products = [
        {index: 0, type: 'aaa'},
        {index: 1, type: 'bbb'},
        {index: 2, type: 'aaa'},
    ];
    let types = getUniqueTypes(products);

    expect(types.length).toEqual(2);
    expect(types.includes('aaa')).toBe(true);
    expect(types.includes('bbb')).toBe(true);
});
