var mountain_list_arr = [];


let mountains_list = document.querySelector('#moutain-list');
let li;
let mountain;

addMountain();

function addMountain() {
   for (let index = 0; index < 4; index++) {
      
      let mountain = prompt('Please share the name of the mountain you climbed');
      mountain_list_arr.push(mountain);

      li = document.createElement('p');
      li.appendChild(document.createTextNode(mountain));
      mountains_list.appendChild(li);
   }
   console.log(mountain_list_arr);
}