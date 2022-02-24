let title = document.getElementById("title");
//let img = document.getElementById("img").src = 
let instructions = document.getElementById("instructions");
let listElement = document.querySelector("ul");


/*let	p1 = document.getElementById("p1");
let	p2 = document.getElementById("p2");
let	p3 = document.getElementById("p3");
let	p4 = document.getElementById("p4");
let	p5 = document.getElementById("p5");
let	p6 = document.getElementById("p6");
let	p7 = document.getElementById("p7");
let	p8 = document.getElementById("p8");
let	p9 = document.getElementById("p9");
let	p10 = document.getElementById("p10");
let	p11 = document.getElementById("p11");
let	p12 = document.getElementById("p12");
let	p13 = document.getElementById("p13");
let	p14 = document.getElementById("p14");
let	p15 = document.getElementById("p15");
let	p16 = document.getElementById("p16");
let	p17 = document.getElementById("p17");
let	p18 = document.getElementById("p18");
let	p19 = document.getElementById("p19");
let	p20 = document.getElementById("p20");*/
let video = document.getElementById("video");

 axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(function (response) {
           const data = response.data.meals[0];
           recipeName(data);
           recipeImage(data);
           recipeInstructions(data);
           //recipeIngredients(data);
           recipeVideo(data);
           igg(data)
        })

// Name of meal
 function recipeName(recipe) {
   title.innerHTML = recipe.strMeal
   //console.log(recipe.strMeal)
};

//Image of meal
function recipeImage(image) {
  let img = document.getElementById("img").src = image.strMealThumb

};

// Instructions
function recipeInstructions(Ins) {
	instructions.innerHTML = Ins.strInstructions
};

// ingredients
function recipeIngredients(ingred) {
    p1.innerHTML = ingred.strIngredient1
    p2.innerHTML = ingred.strIngredient2
    p3.innerHTML = ingred.strIngredient3
    p4.innerHTML = ingred.strIngredient4
    p5.innerHTML = ingred.strIngredient5
    p6.innerHTML = ingred.strIngredient6
    p7.innerHTML = ingred.strIngredient7
    p8.innerHTML = ingred.strIngredient8
    p9.innerHTML = ingred.strIngredient9
    p10.innerHTML = ingred.strIngredient10
    p11.innerHTML = ingred.strIngredient11
    p12.innerHTML = ingred.strIngredient12
    p13.innerHTML = ingred.strIngredient13
    p14.innerHTML = ingred.strIngredient14
    p15.innerHTML = ingred.strIngredient15
    p16.innerHTML = ingred.strIngredient16
    p17.innerHTML = ingred.strIngredient17
    p18.innerHTML = ingred.strIngredient18
    p19.innerHTML = ingred.strIngredient19
    p20.innerHTML = ingred.strIngredient20
};

// Test run with Ingredient
function igg(str) {
  for (let i = 1; i <= 20; i++){
     const newItem = document.createElement("li");
     listElement.appendChild(newItem);
     newItem.innerHTML = str["strIngredient" + i];

  	//console.log(str["strIngredient" + i]);
  }
}



function recipeVideo(vid) {
   let video = document.getElementById("video").href = vid.strYoutube;
};

  function NewRecipe() {
  axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(function (response) {
           const data = response.data.meals[0];
           recipeName(data);
           recipeImage(data);
           recipeInstructions(data);
           //recipeIngredients(data);
           recipeVideo(data);
           igg(data)
        })
}



























