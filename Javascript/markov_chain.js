let fullText = "";
let linesArray;
// let splittedTextArr = [];
let wordsArray = [];
let generatedSentence = "";
let current;

const wordMap = new Map();

function preload() {
  //textArr = loadStrings('../shakespare.txt')
  linesArray = loadStrings("../textExample.txt");
}

function setup() {
  background(200);

  // console.log(textArr)
  //splitString();
  //   seperateDots();
  //   splitTextArrWithDots();

  generateWordArray();
  uniqueWordMapCreator();
  generateSentences(200);
  console.log(generatedSentence);
}

// function splitString() {
//   textArr.forEach((line) => {
//     let str = line.trim().replace(/\s+/g, " ");
//     splittedTextArr = splittedTextArr.concat(str.split(" "));
//   });

//   // splittedTextArr = textArr[0].split(' ')
//   // console.log(splittedTextArr)
// }

function generateWordArray() {
  fullText = linesArray.join("\n")
//   fullText = linesArray.join(" ");
  fullText = fullText
    .trim()
    .replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g, " $& ") //   '   add this maybe?
    .replace(/[ ]+/g, " ");
  wordsArray = fullText.split(" ");
}

// function seperateDots() {
//   for (let i = 0; i < splittedTextArr.length; i++) {
//     //console.log("i", i,"textArray[i]", splittedTextArr[i])
//     //if(splittedTextArr[i].includes(".")){
//     splittedTextArr[i] = splittedTextArr[i]
//       .replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g, " $& ")
//       .replace(/[ ]+/g, " ")
//       .trim();
//     //}
//   }
//   // console.log(splittedTextArr)
// }

// function splitTextArrWithDots() {
//   for (let i = 0; i < splittedTextArr.length; i++) {
//     if (!splittedTextArr[i].includes(" ")) {
//       splittedTextArrWithDots.push(splittedTextArr[i]);
//     } else {
//       splittedTextArrWithDots = splittedTextArrWithDots.concat(
//         splittedTextArr[i].split(" ")
//       );
//     }
//   }
//   // console.log(splittedTextArrWithDots)
// }

function uniqueWordMapCreator() {
  for (let i = 0; i < wordsArray.length - 1; i++) {
    let currentWord = wordsArray[i];
    let nextWord = wordsArray[i + 1];
    if (!wordMap.has(currentWord)) {
      wordMap.set(currentWord, []);
    }
    wordMap.get(currentWord).push(nextWord);
  }
  console.log(wordMap);
}

function generateSentences(numberOfWords = 10) {
  current = random(Array.from(wordMap.keys()));
  for (let i = 0; i < numberOfWords; i++) {
    if(!isSpecialCharacter(current)){
        generatedSentence += " "
    }
    generatedSentence += current
    let array = wordMap.get(current);
    current = random(array);
  }
}

function isSpecialCharacter(str){
    //TODO
    return false
}



// function getRandomFromArray(array){
//     let r = random(0,array.length)
//     return array[r]
// }
