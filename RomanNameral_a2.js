const prompt = "Enter a Name to see its weight!";
const obj = {X: 10, V: 5, L: 50, M: 1000, I: 1, Y: 5000, C: 100, D: 500};
let keys = Object.keys(obj)
let value = Object.values(obj)

let name = 'homersimpsonvsdonaldtrump';



function cumulator () {keys.forEach (function(k, v) { if (name .toUpperCase() .includes(k)) {
  console.log ('Name has ',(name .toUpperCase() .split(k) .length - 1), k, '-',name.toUpperCase().includes(k),);
  console.log();
  console.log ( (name .toUpperCase() .split(k) .length - 1) * value[v])};}) 
  };


cumulator();
