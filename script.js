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



























