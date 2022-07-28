// let arrayatags=[];
import {recipes} from "./recipes.js";
const btnIngredient = document.querySelector(".btn_ingredients");
// const btnUstensil = document.querySelector(".btn_ustensils");
// const btnAppareil = document.querySelector(".btn_appareils");
const listeTag = document.getElementById("liste_tag")
btnIngredient.addEventListener("click", function(){
    let btnIngredientTag = document.createElement("button")
    btnIngredientTag.textContent = btnIngredient;
    btnIngredientTag.classList.add("btn_ingredient_tag")
    listeTag.appendChild(btnIngredientTag);
});  

