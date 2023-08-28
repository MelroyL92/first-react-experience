import {allTV} from "./helperTVString.js";

//Assignment 1A
const tvType = allTV.map(tv =>tv.type);

//Assignment 1B
const soldOut = [];
for (let i = 0; i < allTV.length; i++) {
    if (allTV[i].originalStock - allTV[i].sold === 0) {
        soldOut.push(allTV[i]);
    }
}

//Assignment 1C
const specificType = allTV.find(tv => tv.type == 'NH3216SMART')


// Assignment 1D
const sportUsers = [];
for (let i = 0; i < allTV.length; i++) {
    if (allTV[i].refreshRate >= 100) {
        sportUsers.push(allTV[i].brand + allTV[i].name + " , suitable: true")
    } else {
        sportUsers.push(allTV[i].brand + allTV[i].name + " , suitable: false")
    }
}

//Assignment 1E
const bigTV = [];

for (let i = 0; i < allTV.length; i++) {
    for (let j = 0; j < allTV[i].availableSizes[j]; j++) {
        if (allTV[i].availableSizes[j] >= 65) {
            bigTV.push(allTV[i]);
        }
    }
}

//Assignment 1F
//const ambilightTV = []

 //   for (let i = 0; i < allTV.length; i++) {
  //      for (let j = 0; j < allTV[i].options.length; j++) {
  //          if (
  //              allTV[i].options[j].name.applicable === true && allTV[i].options[j].name === "ambiLight") {
  //              ambilightTV.push(allTV[i]);
  //          }
  //      }
  //  }

// opdrachtg 2A