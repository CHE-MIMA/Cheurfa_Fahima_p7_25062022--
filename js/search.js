import {recipes} from "./recipes.js";
import {displayRecipes,displayIngredients, displayUstensils} from "./index.js";
import {displayAppareils,} from "./filters.js";
import { displayTags } from "./tag.js";

let searchIn = document.getElementById("principal-search");
// function qui affiche les recettes a l'ajout de 3 caractère 
searchIn.addEventListener("keyup", function(){
    let searchInput= searchIn.value;
    let searchedArray = []
    let tabIngredients = [];
    if(searchInput.length >= 3) {
        // utulisation de boucle for  sur le tableau des recettes
        for (let index = 0; index < recipes.length; index++) {
            const recipe = recipes[index];
            for (let index2 = 0; index2 < recipe.ingredients.length; index2++) {
                tabIngredients.push(recipe.ingredients[index2].ingredient.toLowerCase());
            }
            // on verifie si la recherche est presente dans le nom
            if(recipe.name.toLowerCase().includes(searchInput) || 
               // si elle est presente dans la description  
            recipe.description.toLowerCase().includes(searchInput) ||        
              // si elle est presente dans ingredients
            tabIngredients.includes(searchInput)
        // })
      
        ){
            searchedArray.push(recipe);
        }
        
        }
     } else {
            searchedArray = recipes;
        }
        // on vide le tableau precident pour afficher le nouveau
    document.getElementById("card-grid").innerHTML='';
    // console.log(newUstensilsarray);      
 displayRecipes(searchedArray)
 
});





