let fullText = "";
let linesArray;
let wordsArray = [];
let generatedSentence = "";
let current;

const wordMap = new Map();

function preload() {
  linesArray = loadStrings("../textExample.txt");
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(200);
  frameRate(10);
  generateWordArray();
  uniqueWordMapCreator();
  generateSentences(1000);
  console.log(generatedSentence);
  textAlign(CENTER);
  textSize(30)
  textWrap(WORD);
  textStyle(ITALIC);
  text(generatedSentence, 0,50,width,height-150)
}

function generateWordArray() {
  fullText = linesArray.join("\n")
//   fullText = linesArray.join(" ");
  fullText = fullText
    .trim()
    .replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g, " $& ") //   '   add this maybe?
    .replace(/[ ]+/g, " ");
  wordsArray = fullText.split(" ");
}

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
    generatedSentence += " "
    generatedSentence += current
    let array = wordMap.get(current);
    current = random(array);
  }
}