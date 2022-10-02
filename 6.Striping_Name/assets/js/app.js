var name = "\n \t Ghulam Farid \t \n";

//method 1
console.log(name.trim());
//method 2
console.log(name.replace(/^\s+|\s+$/g, ''));
//method 3
console.log(name.replace(/^\s+|\s+$/gm, ''));