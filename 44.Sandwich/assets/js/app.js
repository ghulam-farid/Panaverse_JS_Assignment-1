

let sandwich_ingredient = ["bread", "cheese", "lettuce", "tomato", "mayo"];

let sandwich_ingredient1 = ["bread", "cheese", "onion", "mayo"];

let sandwich_ingredient2 = ["bread", "cheese", "lettuce", "corn", "mayo"];

function makeSandwich(sandwich_ingredient) {
  console.log(`Your sandwich has ${sandwich_ingredient.join(", ")}`);
}

makeSandwich(sandwich_ingredient);

makeSandwich(sandwich_ingredient1);

makeSandwich(sandwich_ingredient2);
