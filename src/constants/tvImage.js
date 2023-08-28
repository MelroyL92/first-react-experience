import {allTV} from "./helperTVString.js"



export function tvImage (array) {
    let image = "";

    if (array == 0) {
        image = allTV[0].sourceImg;
    } else if (array == 1) {
        image = allTV[1].sourceImg;
    } else if (array == 2) {
        image = allTV[2].sourceImg;
    } else if (array == 3) {
        image = allTV[3].sourceImg;
    } else if (array == 4) {
        image = allTV[4].sourceImg;
    }
    return image;
}