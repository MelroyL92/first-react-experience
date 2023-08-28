import {bestSellingTv} from "./inventory.js";
import {inventory} from "./inventory.js";

const bestSellingTVArray = [bestSellingTv]  // van een object een array gemaakt
export const allTV = bestSellingTVArray.concat(inventory); // twee array's samengevoegd tot 1


export function tvName(array) {

    return `${allTV[array].brand} ${allTV[array].type} ${allTV[array].name}`
}


console.log(allTV)