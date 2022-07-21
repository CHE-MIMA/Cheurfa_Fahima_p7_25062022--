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



// let inputIngredient = document.getElementById("ingredient-search");
// let appareilsInput = document.getElementById("appareil-search");
// let ustensilsInput = document.getElementById("ustensil-search");
// let ingredientsList=new Set();
// let ustensilsList= new Set();
// let appareilsList=  new Set();

// ingredientsList.clear()
// ustensilsList.clear()
// appareilsList.clear()
//     // * Reset l'affichage des différentes zones
//     const listeIngredient=   document.getElementById("liste_ingredients");
//     listeIngredient.innerHTML = ""

//     const listeUstensils= document.getElementById("liste_ustensiles");
//     listeUstensils.innerHTML = ""
   
//     const listeAppareils= document.getElementById("liste_appareils");
//     listeAppareils.innerHTML = ""


    
//     // > Event listener input du filtre ingrédients
//   inputIngredient.addEventListener("input", (e) => {
//         const value = e.target.value
//         let newIngredientsSet = new Set();
//         ingredientsList.forEach((ingredient) => {
//             if(ingredient.toLowerCase().includes(value.toLowerCase())) {
//                 newIngredientsSet.add(ingredient);
//             }
//         })                        
//         displayFilters(newIngredientsSet, ustensilsList, appareilsList)          
//     })
//     // Event listener input du filtre appareils
//     appareilsInput.addEventListener("input", (e) => {
//         const value = e.target.value
//         let newAppliancesSet = new Set();
//         appareilsList.forEach((appareil) => {
//             if(appareil.toLowerCase().includes(value.toLowerCase())) {
//                 newAppliancesSet.add(appareil);
//             }
//         })                        
//         displayFilters(ingredientsList, newAppliancesSet, ustensilsList)          
//     })
//     // > Event listener input du filtre ustensils
//      ustensilsInput.addEventListener("input", (e) => {
//         const value = e.target.value
//         let newUstensilsSet = new Set();
//         ustensilsList.forEach((ustensil) => {
//             if(ustensil.toLowerCase().includes(value.toLowerCase())) {
//                 newUstensilsSet.add(ustensil);
//             }
//         })                        
//     displayFilters(ingredientsList, appareilsList, newUstensilsSet)          
//     })