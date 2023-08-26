const amountOfTVBought = require('./amountBought.js');
const amountOfTvSold = require('./helperSoldTV.js');


function amountToBeSold () {
    const leftover = amountOfTVBought() - amountOfTvSold();
    return leftover;
}

console.log(amountToBeSold())