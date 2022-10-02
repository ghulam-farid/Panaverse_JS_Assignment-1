let numbers = [1,2,3,4,5,6,7,8,9,10];

for (let index = 0; index < numbers.length; index++) {
   if (numbers[index] === 1) {
      console.log('1st');
   }else if(numbers[index] === 2){
      console.log('2nd');
   }else if(numbers[index] === 3){
      console.log('3rd');
   }else{
      console.log(`${numbers[index]}th`);
   }
   
}