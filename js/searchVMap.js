import {recipes} from "./recipes.js";
import {displayRecipes,displayIngredients, displayUstensils} from "./index.js";
import {displayAppareils,} from "./filters.js";
import { displayTags } from "./tag.js";
let searchPrincipal = document.getElementById("principal-search");
console.log(searchPrincipal);
searchPrincipal.addEventListener("keyup", function(){
    let searchInput= searchPrincipal.value;
    let newSearchedArray=[]
    
  
    if(searchInput.length >= 3) {
      newSearchedArray= recipes.map((recipe)=> {
          
         let listeIgred=null;
            recipe.ingredients.forEach((ingredient)=>{
         
            listeIgred+=" "+ingredient;
         })
      
         let listeUsten=null;
         recipe.ustensils.forEach((ustensil)=>{
         listeUsten+=" "+ustensil;
         })
      
   let recipesInclude = recipe.name+recipe.description+" "+listeIgred+" "+recipe.appareils+" "+listeUsten;
   if(recipesInclude.includes(searchInput)){

      newSearchedArray.push(recipe)
   }
   console.log(newSearchedArray);
    
      }) 
     
    } else {
      // displayRecipes(recipes);
    }
    document.getElementById("card-grid").innerHTML='';
 displayRecipes(newSearchedArray);
 displayAppareils(newSearchedArray);
 displayIngredients(newSearchedArray);
 displayUstensils(newSearchedArray);
 displayTags();
})



