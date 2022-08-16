import {recipes} from "./recipes.js";
import {displayIngredients, displayRecipes, displayUstensils} from "./index.js";
import { displayAppareils } from "./filters.js";


export function displayTags(){
const btnIngredient = document.querySelectorAll(".btn_ingredients");
const btnUstensil = document.querySelectorAll(".btn_ustensils");
const btnAppareil = document.querySelectorAll(".btn_appareils");
const listeTag = document.getElementById("liste_tag");
 // const main = document.getElementById("card-grid");
console.log(btnIngredient);
let ingrArrayTag = [];
let appareilArrayTag = [];
let ustensilArrayTag = [];
// newIngredientList.forEach(btn => {
 btnIngredient.forEach(btn=>{ btn.addEventListener("click", function(){
console.log(btn.textContent);
//_______________________________________________
 let btnIngredientInput= btn.innerText;
console.log( btnIngredientInput);
 //_______________________________________________
 let btnIngredientTag = document.createElement("div")
btnIngredientTag.innerText = btn.textContent;
 btnIngredientTag.classList.add("btn_ingredient_tag");
 let closeIcon= document.createElement("img")
closeIcon.setAttribute("src", "./closeIcon.svg")
closeIcon.classList.add("close_icon")
btnIngredientTag.appendChild(closeIcon);
listeTag.appendChild(btnIngredientTag); 
                           
 recipes.forEach((recipe) => { 
 const recipeCard = document.querySelectorAll('.card');
 recipeCard.forEach(r=>{
    console.log(r.getAttribute("id"));
    console.log(recipe.id);
    if(r.getAttribute("id")==recipe.id
     //_______________________________________________          
     &&
     (recipe.name.toLowerCase().includes(btnIngredientInput) || 
     recipe.description.toLowerCase().includes(btnIngredientInput)||
    recipe.ingredients.forEach((ingredient) => {
    ingredient.ingredient.toLowerCase().includes(btnIngredientInput)})
    )
    //_______________________________________________//           
     ){
    ingrArrayTag.push(recipe);
                    
     };
    })
    })  
     displayRecipes(ingrArrayTag);
     
    closeIcon.addEventListener("click", function(){
     btnIngredientTag.style.display="none";
//  let recupArrayIngr  
    }); 
    })                 
    })

    btnUstensil.forEach(btn=>{ btn.addEventListener("click", function(){
        console.log(btn.textContent);
        //_______________________________________________
         let btnUstensilInput= btn.innerText;
        console.log( btnUstensilInput);
         //_______________________________________________
         let btnUstensilTag = document.createElement("div")
        btnUstensilTag.innerText = btn.textContent;
         btnUstensilTag.classList.add("btn_Ustensil_tag");
         let closeIcon= document.createElement("img")
        closeIcon.setAttribute("src", "./closeIcon.svg")
        closeIcon.classList.add("close_icon")
        btnUstensilTag.appendChild(closeIcon);
        listeTag.appendChild(btnUstensilTag); 
                                   
         recipes.forEach((recipe) => { 
         const recipeCard = document.querySelectorAll('.card');
         recipeCard.forEach(r=>{
            console.log(r.getAttribute("id"));
            console.log(recipe.id);
            if(r.getAttribute("id")==recipe.id
             //_______________________________________________          
             &&
             (recipe.name.toLowerCase().includes(btnUstensilInput) || 
             recipe.description.toLowerCase().includes(btnUstensilInput)||
            recipe.ingredients.forEach((ingredient) => {
            ingredient.ingredient.toLowerCase().includes(btnUstensilInput)})
            )
            //_______________________________________________//           
             ){
            ustensilArrayTag.push(recipe);
                            
             };
            })
            }) 
             displayRecipes(ustensilArrayTag)
            closeIcon.addEventListener("click", function(){
                btnUstensilTag.style.display="none";
               }); 
            })                 
            })

            
            console.log(btnAppareil);
         btnAppareil.forEach(btn=>{ btn.addEventListener("click", function(){
        console.log(btn.textContent);
        //_______________________________________________
         let btnAppareilInput= btn.innerText;
        console.log( btnAppareilInput);
         //_______________________________________________
         let btnAppareilTag = document.createElement("div")
        btnAppareilTag.innerText = btn.textContent;
         btnAppareilTag.classList.add("btn_appareils_tag");
         let closeIcon= document.createElement("img")
        closeIcon.setAttribute("src", "./closeIcon.svg")
        closeIcon.classList.add("close_icon")
        btnAppareilTag.appendChild(closeIcon);
        listeTag.appendChild(btnAppareilTag); 
                                   
         recipes.forEach((recipe) => { 
         const recipeCard = document.querySelectorAll('.card');
         recipeCard.forEach(r=>{
            console.log(r.getAttribute("id"));
            console.log(recipe.id);
            if(r.getAttribute("id")==recipe.id
             //_______________________________________________          
             &&
             (recipe.name.toLowerCase().includes(btnAppareilInput) || 
             recipe.description.toLowerCase().includes(btnAppareilInput)||
            recipe.ingredients.forEach((ingredient) => {
            ingredient.ingredient.toLowerCase().includes(btnAppareilInput)})
            )
            //_______________________________________________//           
             ){
             appareilArrayTag.push(recipe);
                            
             };
            })
            }) 
             displayRecipes(appareilArrayTag)
            closeIcon.addEventListener("click", function(){
                btnAppareilTag.style.display="none";
               }); 
            })                 
            })
    }
                                        
//     const btnUstensil = document.querySelectorAll(".btn_ustensils");
//     const btnAppareil = document.querySelectorAll(".btn_appareils");
// btnUstensil.forEach(btn=>{ btn.addEventListener("click", function(){
//     console.log(btn.textContent);
//     let btnUstensilTag = document.createElement("div")
//     btnUstensilTag.innerText = btn.textContent;
//     btnUstensilTag.classList.add("btn_Ustensil_tag");
//     let closeIcon= document.createElement("img")
//     closeIcon.setAttribute("src", "./closeIcon.svg")
//     closeIcon.classList.add("close_icon")
//     btnUstensilTag.appendChild(closeIcon);
//     listeTag.appendChild(btnUstensilTag);  
//     const recipe = document.querySelectorAll('.card');
//     recipe.forEach(r=>{console.log(r.getAttribute("id"));});
//     closeIcon.addEventListener("click", function(){
//         btnUstensilTag.style.display="none";
//     });
// })
// });
// btnAppareil.forEach(btn=>{ btn.addEventListener("click", function(){
//     console.log(btn.textContent);
//     let btnAppareilTag = document.createElement("div")
//     btnAppareilTag.innerText = btn.textContent;
//     btnAppareilTag.classList.add("btn_appareils_tag");
//     let closeIcon= document.createElement("img")
//     closeIcon.setAttribute("src", "./closeIcon.svg")
//     closeIcon.classList.add("close_icon")
//     btnAppareilTag.appendChild(closeIcon);
//     listeTag.appendChild(btnAppareilTag);  
//     const recipe = document.querySelectorAll('.card');
//     recipe.forEach(r=>{console.log(r.getAttribute("id"));});
//     closeIcon.addEventListener("click", function(){
//         btnAppareilTag.style.display="none";
//     });
// })
// });

  
  
  





