const arr = [
  { name: 'S', age: 29 },
  { name: 'V', age: 26 },
  { name: 'I', age: 29 },
  { name: 'B', age: 30 },
  { name: 'A', age: 27 },
  { name: 'N', age: 25 },
  { name: 'T', age: 31 },
];

const newArr = [];
// arr.forEach((el) => {
//   newArr.push(el.age + 5)
// });

const newArr1 = arr
  .map((el) => {
    el.age += 5;
    return el;
  })
  .filter((el) => el.age < 35)
  .sort((a, b)=>b.age-a.age)
  .reduce((acc, cur)=> acc+=cur.age,0)

console.log(arr);
console.log(newArr1);
