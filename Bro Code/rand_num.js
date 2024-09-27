// Get Random Number
// between 1 and 0

let r_num= Math.random();

// b/w 0 and 9
console.log(Math.trunc(r_num*10));

//b/w 0 and 99
console.log(Math.trunc(r_num*100));

//b/w 1 and 6
console.log(Math.trunc(r_num*6)+1);

const min=50;
const max=100;

let random=Math.floor(Math.random()*(max-min))+min;

console.log(random)