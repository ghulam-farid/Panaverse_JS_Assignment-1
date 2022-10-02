let magicians_name = ["Harry Houdini", "David Copperfield", "Teller"];

let magicians_name_copy = [...magicians_name];

function make_great(magicians_name_arr) {
  let great_magicians = [];
  for (let index = 0; index < magicians_name_arr.length; index++) {
    great_magicians[index] = `The Great ${magicians_name_arr[index]}`;
  }
  return great_magicians;
}

let great_magicians= make_great(magicians_name_copy);

function show_magicians(magicians_name) {
  for (let index = 0; index < magicians_name.length; index++) {
    console.log(magicians_name[index]);
  }
}
console.log('The Original Magicians');
show_magicians(magicians_name);
console.log('The Great Magicians');
show_magicians(great_magicians);