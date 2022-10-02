var my_guest_list = ['Ali', 'Ahmad', 'Wadeed', 'Raheeb']

for (let index = 0; index < my_guest_list.length; index++) {
   console.log(`Hello ${my_guest_list[index]}, I would like to invite you to my dinner party.`);
}

console.log(`\nI have found that ${my_guest_list[2]} can't make a dinner.\n`);
my_guest_list[2] = 'Sami';

for (let index = 0; index < my_guest_list.length; index++) {
   console.log(`Hello ${my_guest_list[index]}, I would like to invite you to my dinner party.`);
}

console.log(`\nI have found a bigger dinner table.\n`);
my_guest_list.unshift('Sumama');
my_guest_list.push('Shabaz');
my_guest_list.splice(my_guest_list.length / 2, 0, 'Safi');

for (let index = 0; index < my_guest_list.length; index++) {
   console.log(`Hello ${my_guest_list[index]}, I would like to invite you to my dinner party.`);
}

console.log('\nO o we can only invite two people for dinner\n');

var removed_guest_name;
let i = 0;
let total_invited_guest = [];
for (let index = 0; index < my_guest_list.length; index++) {
   console.log('iteration :', i);
   if(my_guest_list.length > 2){
      removed_guest_name = my_guest_list.pop();
      console.log(`Hello ${removed_guest_name}, I'm sorry I can't invite you at dinner.`);
      index = 0;
   }

   if(my_guest_list.length <= 2){
      // number of people
      
      removed_guest_name = my_guest_list.pop();
      total_invited_guest.push(removed_guest_name);
      console.log(`Hello ${removed_guest_name}, You guys are still invited.`);
      index = -1;
   }
   
}

console.log(my_guest_list);

console.log(`\nThere are ${total_invited_guest.length} people invited to dinner.\n`);

