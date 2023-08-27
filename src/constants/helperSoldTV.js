import {bestSellingTv, inventory} from "./inventory.js";


const numbersToAdd = inventory.map(tvSold => tvSold.sold);
const bestTV = bestSellingTv.sold;


export function amountOfTvSold () {
    let sum = 0;
    for (let i = 0; i < numbersToAdd.length ; i++) {
        sum += numbersToAdd[i];
    }
    return sum += bestTV ;

}

// ik moet een functie schrijven die de tv's van 2 arrays bij
// elkaar optelt en uiteindelijk ook weergeeft