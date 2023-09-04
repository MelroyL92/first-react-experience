import {allTV} from "./helperTVString.js"



export function tvImage (array) {

    switch (array) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
            return  allTV[array].sourceImg;
        default:
            return "please fill in a valid input";

    }
}