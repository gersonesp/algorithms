// Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

const backspaceCompare = (stringOne, stringTwo) => {
  let newStringOne = [];
  let newStringTwo = [];

  for (let i = 0; i < stringOne.length; i++) {
    let current = stringOne[i];
    if (current === "#") {
      newStringOne.pop();
      continue;
    }

    newStringOne.push(current);
  }

  for (let i = 0; i < stringTwo.length; i++) {
    let current = stringTwo[i];
    if (current === "#") {
      newStringTwo.pop();
      continue;
    }

    newStringTwo.push(current);
  }

  return newStringOne.join("") === newStringTwo.join("");
};

const strOne = "ab#c";
const strTwo = "ad#c";

const strThree = "ab##";
const strFour = "c#d#";

const strFive = "a##c";
const strSix = "#a#c";

const strSeven = "a#c";
const strEight = "b";

console.log(backspaceCompare(strOne, strTwo));
console.log(backspaceCompare(strThree, strFour));
console.log(backspaceCompare(strFive, strSix));
console.log(backspaceCompare(strSeven, strEight));
