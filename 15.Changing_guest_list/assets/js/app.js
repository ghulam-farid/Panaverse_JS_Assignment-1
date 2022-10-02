var my_guest_list = ['Ali', 'Ahmad', 'Wadeed', 'Raheeb']

for (let index = 0; index < my_guest_list.length; index++) {
   console.log(`Hello ${my_guest_list[index]}, I would like to invite you to my dinner party.`);
}

console.log(`I have found that ${my_guest_list[2]} can't make a dinner.`);
my_guest_list[2] = 'Sami';

for (let index = 0; index < my_guest_list.length; index++) {
   console.log(`Hello ${my_guest_list[index]}, I would like to invite you to my dinner party.`);
}