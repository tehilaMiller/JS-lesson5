const names = ["Alice", "Bob", "Tiff", "bruce", "Alice"];
//א
const nameCount = names.reduce((item, name) => {
  // אם השם כבר קיים במצבר (acc), הגדל את הספירה ב-1, אחרת התחל ספירה מ-1
  item[name] = (item[name] || 0) + 1;
  return item;
}, {});
console.log(nameCount);
//ב
//const letters = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];
//const uniqueLetters = [...new Set(letters)];
//console.log(uniqueLetters);
const letters = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];

const uniqueLetters = letters.reduce((acc, letter) => {
  if (!acc.includes(letter)) {
    acc.push(letter);
  }
  return acc;
}, []);

console.log(uniqueLetters);
//ג
const numbers = [-5, 25, -19, 0, 16, 0];
const f = numbers.reduce((item, num) => {
  if (num > 0) {
    item.push(Math.sqrt(num));
  }
  return item;
}, []);

console.log(f);
