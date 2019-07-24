const obj = {X: 10, M: 1000, I: 1, C: 100, D: 500, L: 50, V: 5, Y: 5000}
//
let key = Object.keys(obj)
let value  = Object.values(obj)
let name = 'xxxym'
let score = 0;

//using forEach() loop
let test = function subScore(){ key .forEach(function(k, v) {
    if (name .toUpperCase() .includes(k)) { 
      console.log ('there are',name .toUpperCase() .split(k) .length - 1, k, 'in', name ,'of', value[v],'for', 
                   (name .toUpperCase() .split(k) .length - 1) * value[v], 'pts');
      total = score += (name .toUpperCase() .split(k) .length - 1) * value[v]
    
    }
  
  })
return total;
}
test();

console.log('Javascript, we did it without using reduce() method!!!!!!\n');
console.log('Score is:', total)
