import {bestSellingTv, inventory} from "./inventory.js";


const originalStockBestTV = bestSellingTv.originalStock;
const originalStockTV = inventory.map(tvstock => tvstock.originalStock);

export function amountOfTVBought() {
    let sum = 0;
    for (let i = 0; i < originalStockTV.length ; i++) {
        sum += originalStockTV[i];
    }
    return sum += originalStockBestTV ;

}