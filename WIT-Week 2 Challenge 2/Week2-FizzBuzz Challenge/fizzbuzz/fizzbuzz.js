let fizzBuzz =function ([ ] , [ ]) {
 let array = [ ]
for (let i = 1; array.length<10; index++) {
  if(i % 3===0 && i %5 ===0) {
     return 'FizzBuzz';
  }  else if(i % 3===0){
      return 'Fizz';
  }else if(i % 5===0){
      return 'Buzz';
  }else{
      return 4;
  }
    
}
   
};
console.log(fizzBuzz())

module.exports = fizzBuzz;