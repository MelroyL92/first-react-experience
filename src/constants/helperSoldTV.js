import {bestSellingTv, inventory} from "./inventory.js";


const numbersToAdd = inventory.map(tvSold => tvSold.sold);
const bestTV = bestSellingTv.sold;


function amountOfTvSold () {
    let sum = 0;
    for (let i = 0; i < numbersToAdd.length ; i++) {
        sum += numbersToAdd[i];
    }
    return sum += bestTV ;

}

console.log(amountOfTvSold())

// ik moet een functie schrijven die de tv's van 2 arrays bij
// elkaar optelt en uiteindelijk ook weergeeft