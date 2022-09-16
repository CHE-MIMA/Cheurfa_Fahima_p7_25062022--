import {recipes} from "./recipes.js";
import {displayRecipes} from "./index.js";

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
      document.getElementById("card-grid").innerHTML="";
      newSearchedArray.push(recipe)
      displayRecipes(newSearchedArray);
  
   }
   console.log(newSearchedArray);
    
      }) 
     
    } else {
      displayRecipes(recipes);
    }
  
 

})



