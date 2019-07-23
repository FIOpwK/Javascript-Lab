const obj = {X: 10, V: 5, L: 50, M: 1000, I: 1, Y: 5000, C: 100, D: 500};
let keys = Object.keys(obj)
let value = Object.values(obj)

let name = 'domhnall flopwiki fiopwk github';

function cumulator () {
  keys.forEach (function(k, v) { if (name .toUpperCase() .includes(k)) {
  console.log ( 'If string has',name .toUpperCase() .split(k).length - 1, k, 'and', k, '=', value[v],'then', 
  name .toUpperCase() .split(k).length - 1,'*',value[v],'=', (name .toUpperCase() .split(k).length - 1) * value[v]) };})
  };

cumulator();
