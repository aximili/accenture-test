export function getUniqueTypes(products: {type: string}[]) {
    let types = products.map(p => p.type);
    return Array.from(new Set(types));
}