import {recipes} from "./recipes.js";
// let ingredientsTag=[]
// let appareilsTag=[]
// let ustensilsTag=[]


// let arrayatags=[];

const btnIngredient = document.querySelectorAll(".btn_ingredients");
const btnUstensil = document.querySelector(".btn_ustensils");
const btnAppareil = document.querySelector(".btn_appareils");
const listeTag = document.getElementById("liste_tag")

console.log(btnIngredient);
// newIngredientList.forEach(btn => {
    btnIngredient.forEach(btn=>{ btn.addEventListener("click", function(){
        console.log(btn.textContent);
        let btnIngredientTag = document.createElement("div")
        btnIngredientTag.innerText = btn.textContent;
        btnIngredientTag.classList.add("btn_ingredient_tag");
        let closeIcon= document.createElement("img")
        closeIcon.setAttribute("src", "./closeIcon.svg")

     closeIcon.classList.add("close_icon")
        btnIngredientTag.appendChild(closeIcon);
        listeTag.appendChild(btnIngredientTag);  
        const recipe = document.querySelectorAll('.card');
        recipe.forEach(r=>{console.log(r.getAttribute("id"));});
        

    
})
});

  
  
  





