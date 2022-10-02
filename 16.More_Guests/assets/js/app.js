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
