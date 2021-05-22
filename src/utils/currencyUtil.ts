/** Converts price string from API to a number, eg. "$15.50" -> 15.50 */
export function parsePrice(priceStr: string) {
    let amount = priceStr.match(/\d+(?:,\d{3})*(?:\.\d{2})?/);
    return amount?.length
        ? parseFloat(amount[0].replace(/,/g,''))
        : undefined;
}
