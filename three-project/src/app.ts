const userName = "Max";
// userName = 'Maximilian';
let age = 30;

age = 29;

// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }

// if (age > 20) {
//   let isOld = true;
// }

// console.log(isOld);

// console.log(result);

// const add = (a: number, b: number = 1) => a + b;

// const printOutput: (a: number | string) => void = output => console.log(output);

// const button = document.querySelector('button');

// if (button) {
//   button.addEventListener('click', event => console.log(event));
// }

// printOutput(add(5));

const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];

activeHobbies.push(...hobbies);

const person = {
  name: "Max",
  age: 30,
};

const copiedPerson = { ...person };

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    console.log(curResult);
    console.log(curValue);

    return curResult + curValue;
  }, 0);
};
// ...은 나머지 매개변수라는 의미로 add한 내용들일 전부  배열에 담은 다음 이거를 numbers[]배열에 넣는다
// 이 다음 curResult 와 cur Value에 서로 더한다
const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);
