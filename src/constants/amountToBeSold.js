import {amountOfTvSold} from "./helperSoldTV.js";
import {amountOfTVBought} from "./amountBought.js";

export function amountToBeSold () {

return amountOfTVBought() - amountOfTvSold();
}