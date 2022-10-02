let person_age = parseInt(prompt("Enter your age"));

if(person_age < 2){
   alert('the person is baby');
}else if(person_age >= 2 && person_age < 4){
   alert('the person is a toddler');
}else if(person_age >= 4 && person_age < 13){
   alert('the person is a kid');
}else if(person_age >= 13 && person_age < 20){
   alert('the person is a teenager');
}else if(person_age >= 20 && person_age < 65){
   alert('the person is an adult');
} else {
   alert('the person is a senior');
}