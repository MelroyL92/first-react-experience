import {allTV} from "./helperTVString.js";


const tvSizes = allTV[0].availableSizes;

export function cmToInches(inches) {
    return Math.floor(inches * 2.54);
}

export function tvSize() {

    let result = [];
    for (let i = 0; i < tvSizes.length ; i++) {
        result.push(`${tvSizes[i]} inch (${cmToInches(tvSizes[i])} cm) | `);
    }
    return result;
}
