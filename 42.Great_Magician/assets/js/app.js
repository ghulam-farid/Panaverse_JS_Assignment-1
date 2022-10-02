let magicians_name = ["Harry Houdini", "David Copperfield", "Teller"];

function make_great() {
  for (let index = 0; index < magicians_name.length; index++) {
    magicians_name[index] = `The Great ${magicians_name[index]}`;
  }
}

make_great(magicians_name);

function show_magicians(magicians_name) {
  for (let index = 0; index < magicians_name.length; index++) {
    console.log(magicians_name[index]);
  }
}
show_magicians(magicians_name);
