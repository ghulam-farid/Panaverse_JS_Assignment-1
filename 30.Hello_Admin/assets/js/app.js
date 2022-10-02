let usernames = ['Saad','Farid','Hassan','Nouman','admin'];

for (let index = 0; index < usernames.length; index++) {
   if(usernames[index] == 'admin'){
      console.log(`Hello ${usernames[index]}! Would you like to see a status report?`);
   }else{
      console.log(`Hello ${usernames[index]}! Welocme to the website!`);
   }
}
