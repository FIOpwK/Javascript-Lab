const obj = {X: 10, M: 1000, I: 1, C: 100, D: 500, L: 50, V: 5, Y: 5000};

let key = Object.keys(obj);
let value  = Object.values(obj);
let total = 0;


//editable
let name = 'RomanNameral';


//using forEach() loop
function subScore() {
    let score = 0;
    key .forEach(function(k, v) {
    if (name .toUpperCase() .includes(k)) { 
      total = score += (name .toUpperCase() .split(k) .length - 1) * value[v];
    
    }
  
  })

}
subScore();

console.log('Weight is:', total)
