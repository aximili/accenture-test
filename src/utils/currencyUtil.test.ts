import { currencyUtil } from '.';

test('parsePrice for valid prices', () => {
    expect(currencyUtil.parsePrice('$0.25'))
        .toEqual(0.25);
    expect(currencyUtil.parsePrice('$1,000,000'))
        .toEqual(1000000);
    expect(currencyUtil.parsePrice('AUD 100'))
        .toEqual(100);
});

test('parsePrice for invalid prices', () => {
    expect(currencyUtil.parsePrice('$.'))
        .toEqual(undefined);
    expect(currencyUtil.parsePrice('AUD'))
        .toEqual(undefined);
    expect(currencyUtil.parsePrice(''))
        .toEqual(undefined);
});
