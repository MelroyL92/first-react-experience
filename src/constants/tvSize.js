import {allTV} from "./helperTVString.js";


export function cmToInches(inches) {
    return Math.floor(inches * 2.54);
}

export function tvSize(array) {
    const tvSizes = allTV[array].availableSizes;

    let result = [];
    for (let i = 0; i < tvSizes.length; i++) {
        const inches = cmToInches(tvSizes[i]);
        const tvString = `${tvSizes[i]} inch (${inches} cm)`;

        if (i === tvSizes.length - 1) {
            result.push(tvString);
        } else {
            result.push(`${tvString} | `);
        }
    }

    return result;
}