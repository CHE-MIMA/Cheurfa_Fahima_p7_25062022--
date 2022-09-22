import {recipes} from "./recipes.js";
import {displayRecipes,displayIngredients, displayUstensils} from "./index.js";
import {displayAppareils,} from "./filters.js";
import { displayTags } from "./tag.js";

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
        // console.log(searchedArray)
    } else {
        searchedArray = recipes;
    }
    let arrayIngredients=[];
    document.getElementById("card-grid").innerHTML='';
    searchedArray.forEach((recipe)=>{
        recipe.ingredients.forEach((ingredient)=>{
          arrayIngredients.push(ingredient.ingredient.toLowerCase())
        })
    })
    let arrayUstensils=[];
    document.getElementById("card-grid").innerHTML='';
    let newUstensilsarray= new Set(arrayUstensils)
    searchedArray.forEach((recipe)=>{
        for (let index = 0; index < recipe.ustensils.length; index++){
            newUstensilsarray.add(recipe.ustensils[index].toLowerCase());         
        } })
    // console.log(newUstensilsarray);      
 displayRecipes(searchedArray)});
 displayAppareils(searchedArray);
 displayIngredients(arrayIngredients);
 displayUstensils(newUstensilsarray);
 displayTags();




