let current_users = ['Saad','Farid','Hassan','Nouman','Akif'];

let new_users = ['Ghulam','FArid','Haris','Namat','Akif'];

for (let index = 0; index < current_users.length; index++) {
   current_users[index] = current_users[index].toLowerCase();
}


for (let index = 0; index < new_users.length; index++) {
   if( current_users.includes(new_users[index].toLowerCase()) ){
      console.log('you need to change your username');
   }else{
      console.log('username is available');
   }
}

