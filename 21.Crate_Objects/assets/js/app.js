var mountains_list_obj = {};


let mountains_list = document.querySelector('#moutain-list');
let li;
let mountain;

addMountain();

function addMountain() {
   for (let index = 0; index < 4; index++) {
      
      let mountain = prompt('Please share the name of the mountain you climbed');
      mountains_list_obj[`mountain${index+1}`] = mountain;
      
      li = document.createElement('li');
      li.appendChild(document.createTextNode(mountain));
      mountains_list.appendChild(li);
   }
   console.log(mountains_list_obj);
}