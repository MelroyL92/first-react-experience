import {allTV} from "./helperTVString.js";
import checkImage from 'assets/check.png';
import minusImage from 'assets/minus.png';


const imagecheck = <img src={checkImage} alt="check image"/>;
const minuscheck = <img src={minusImage} alt="minus image"/>

 function checkAndMinus(array) {
    const tvOptions = allTV[array].options;
    let availableOptions = [];


    for (let i = 0; i < tvOptions.length; i++) {
        if (tvOptions[i] === true) {

            switch (tvOptions[i].name) {
                case "wifi":
                    "speech",
                    "hdr",
                    "bluetooth",
                    "ambilight",
                    availableOptions.push(imagecheck, tvOptions[i].name);
                    break;
                default:
                    availableOptions.push(minuscheck, tvOptions[i].name);
                    break;
            }
        } else {
            availableOptions.push(minuscheck, tvOptions[i].name);
        }
    }
    return availableOptions;
}

