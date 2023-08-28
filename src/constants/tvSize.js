import {allTV} from "./helperTVString.js";


export function cmToInches(inches) {
    return Math.floor(inches * 2.54);
}

export function tvSize(array) {
    const tvSizes = allTV[array].availableSizes;

    let result = [];
    for (let i = 0; i < tvSizes.length ; i++) {
        result.push(`${tvSizes[i]} inch (${cmToInches(tvSizes[i])} cm) | `);
    }
    return result;
}
