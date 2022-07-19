import {recipes} from "./recipes.js";
import {displayRecipes} from "./index.js";
//  function getSearch(){

let searchIn = document.getElementById("principal-search");
searchIn.addEventListener("keyup", function(){
    let searchInput= searchIn.value;
    let searchedArray = []
    if(searchInput.length >= 3) {
        recipes.forEach((recipe) => {
            if(recipe.name.toLowerCase().includes(searchInput) || 
            recipe.description.toLowerCase().includes(searchInput) 
            ||
            recipe.ingredients.forEach((ingredient) => {
                ingredient.ingredient.toLowerCase().includes(searchInput)
            
         })
        ){
        searchedArray.push(recipe)
        }
        })
        console.log(searchedArray)
    } else {
        searchedArray = recipes;
    }
    document.getElementById("card-grid").innerHTML='';
 displayRecipes(searchedArray);
})



// }
// getSearch();