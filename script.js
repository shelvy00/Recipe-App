const title = document.getElementById("title");
const instructions = document.getElementById("instructions");
const listElement = document.querySelector("ul");
const video = document.getElementById("video");

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
  const img = document.getElementById("img").src = image.strMealThumb

};

// Instructions
function recipeInstructions(Ins) {
	instructions.innerHTML = Ins.strInstructions
};

// ingredients
/*function recipeIngredients(ingred) {
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
};*/

// Test run with Ingredient
function igg(str) {
  for (let i = 1; i <= 20; i++){
  	//if (listElement !== "") {
     const newItem = document.createElement("li");
     listElement.appendChild(newItem);
     newItem.innerHTML = str["strIngredient" + i];

  	//console.log(str["strIngredient" + i]);
   //}
  }
}



function recipeVideo(vid) {
   const video = document.getElementById("video").href = vid.strYoutube;
};

  function newRecipe() {
  	listElement.innerHTML = ""
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



























