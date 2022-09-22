
import {recipes} from "./recipes.js";
import {displayIngredients, displayRecipes, displayUstensils} from "./index.js";
import { displayAppareils } from "./filters.js";

export function displayTags(){
const btnIngredient = document.querySelectorAll(".btn_ingredients");
const btnUstensil = document.querySelectorAll(".btn_ustensils");
const btnAppareil = document.querySelectorAll(".btn_appareils");
const listeTag = document.getElementById("liste_tag");

// console.log(btnIngredient);
let ingrArrayTag = [];
let appareilArrayTag = [];
let ustensilArrayTag = [];

 btnIngredient.forEach(btn=>{ btn.addEventListener("click", function(){
//console.log(btn.textContent);
//_______________________________________________
 let btnIngredientInput= btn.innerText;
//console.log( btnIngredientInput);
 //_______________________________________________
 let btnIngredientTag = document.createElement("div")
btnIngredientTag.innerText = btn.textContent;
 btnIngredientTag.classList.add("btn_ingredient_tag");
 let closeIcon= document.createElement("img")
closeIcon.setAttribute("src", "./closeIcon.svg")
closeIcon.classList.add("close_icon")
btnIngredientTag.appendChild(closeIcon);
listeTag.appendChild(btnIngredientTag); 
 const recipeCard = document.querySelectorAll('.card');
 console.log('recipeCard ',recipeCard);
 recipeCard.forEach(r=>{                          
 recipes.forEach((recipe) => { 
   let isInIngredients = false;
   recipe.ingredients.forEach((ingredient) => {
     if(ingredient.ingredient.toLowerCase().includes(btnIngredientInput.toLowerCase())){
      isInIngredients = true;
     }
    })

    if(r.getAttribute("id")==recipe.id ){
 if(isInIngredients){
    ingrArrayTag.push(recipe);               
     };

    }
    
    })
    })  
     displayRecipes(ingrArrayTag);
    
// // supression de tags ingredients
    closeIcon.addEventListener("click", function(e){

      let croix = e.target;
      let btnTag = croix.parentNode;
      let listeDesTags = btnTag.parentNode;
      listeDesTags.removeChild(btnTag);


ingrArrayTag = displayRecipeByRemovedTag();// appel a la fonction d'affichage des recettes suite a suppression d'un tag

//console.log(ingrArrayTag)
        
             displayRecipes(ingrArrayTag);
            
          })       
            })
         })
       

function displayRecipeByRemovedTag(){

      const recipeCard = document.querySelectorAll('.card');
       recipeCard.innerHTML='';
let listeTags=document.querySelectorAll(".btn_ingredient_tag"); // les tags ingredients

let listeTagsUstensil =document.querySelectorAll(".btn_Ustensil_tag"); // les tags ustensiles
let listeTagsAppareils =document.querySelectorAll(".btn_appareils_tag"); // les tags appareils

let ingrArrayTag = [];
let activeTags=[];
      listeTags.forEach((currentTag)=> activeTags.push(currentTag.innerText));

      listeTagsUstensil.forEach((currentTag)=> activeTags.push(currentTag.innerText));
      listeTagsAppareils.forEach((currentTag)=> activeTags.push(currentTag.innerText));

    

             recipes.forEach((recipe) => {
               if(activeTags.length==0){
               ingrArrayTag.push(recipe)
               }else{
                  let recipeGlobal = [];
                  recipe.ingredients.forEach((recipeIngr) => {
                  recipeGlobal.push(recipeIngr.ingredient.toLowerCase());
                 })  

                  recipe.ustensils.forEach((recipeUst) => {
                  recipeGlobal.push(recipeUst.toLowerCase());
                 })      

                  recipeGlobal.push(recipe.appliance.toLowerCase());
                  recipeGlobal.push(recipe.name.toLowerCase());
                  recipeGlobal.push(recipe.description.toLowerCase());
                  

                  console.log('recipeGlobal ',recipeGlobal);

              if( activeTags.every(r =>recipeGlobal.includes(r))){
                  ingrArrayTag.push(recipe)
               }  
               }
               

            }) 
            return ingrArrayTag;
}

            // console.log(btnAppareil);
            btnAppareil.forEach(btn=>{ btn.addEventListener("click", function(){
          //     console.log(btn.textContent);
               //_______________________________________________
                let btnAppareilInput= btn.innerText;
           //    console.log( btnAppareilInput);
                //_______________________________________________
                let btnAppareilTag = document.createElement("div")
               btnAppareilTag.innerText = btn.textContent;
                btnAppareilTag.classList.add("btn_appareils_tag");
                let closeIcon= document.createElement("img")
               closeIcon.setAttribute("src", "./closeIcon.svg")
               closeIcon.classList.add("close_icon")
               btnAppareilTag.appendChild(closeIcon);
               listeTag.appendChild(btnAppareilTag);
               const recipeCard = document.querySelectorAll('.card');
                recipeCard.forEach(r=>{                        
                recipes.forEach((recipe) => { 
                
         //          console.log(r.getAttribute("id"));
           //        console.log(recipe.id);
                   if(r.getAttribute("id")==recipe.id
                    //_______________________________________________          
                    &&
                    (recipe.name.toLowerCase().includes(btnAppareilInput) || 
                    recipe.description.toLowerCase().includes(btnAppareilInput)||
                    recipe.appliance.toLowerCase().includes(btnAppareilInput)
                   )
                   //_______________________________________________//           
                    ){
                    appareilArrayTag.push(recipe);
                                   
                    };
                   })
                   }) 
                    displayRecipes(appareilArrayTag)
       
                      //  supression tags appareils
                      
            closeIcon.addEventListener("click", function(e){
            // const recipeCard = document.querySelectorAll('.card');
       
             let croix = e.target;
             let btnTag = croix.parentNode;
             let listeDesTags = btnTag.parentNode;
             listeDesTags.removeChild(btnTag);
                   appareilArrayTag = displayRecipeByRemovedTag(); // appel a la fonction d'affichage des recettes suite a suppression d'un tag
                    displayRecipes(appareilArrayTag);
                    });
                 })       
                   })
                 
       
                   


             btnUstensil.forEach(btn=>{ btn.addEventListener("click", function(){
       //        console.log(btn.textContent);
               //_______________________________________________
                let btnUstensilInput= btn.innerText;
        //       console.log( btnUstensilInput);
                //_______________________________________________
                let btnUstensilTag = document.createElement("div")
               btnUstensilTag.innerText = btn.textContent;
                btnUstensilTag.classList.add("btn_Ustensil_tag");
                let closeIcon= document.createElement("img")
               closeIcon.setAttribute("src", "./closeIcon.svg")
               closeIcon.classList.add("close_icon")
               btnUstensilTag.appendChild(closeIcon);
               listeTag.appendChild(btnUstensilTag); 
       
               const recipeCard = document.querySelectorAll('.card');
                recipeCard.forEach(r=>{                           
                recipes.forEach((recipe) => { 
       
                let isInUstensils = false;
                recipe.ustensils.forEach((ustensil) => {
                if(ustensil.toLowerCase().includes(btnUstensilInput.toLowerCase())){
                   isInUstensils = true;
                }
                })
                   console.log(r.getAttribute("id"));
                   console.log(recipe.id);
                   if(r.getAttribute("id")==recipe.id
                    //_______________________________________________          
                    &&
                    (recipe.name.toLowerCase().includes(btnUstensilInput.toLowerCase()) || 
                    recipe.description.toLowerCase().includes(btnUstensilInput.toLowerCase()) ||
                   isInUstensils)
                   //_______________________________________________//           
                    ){
                   ustensilArrayTag.push(recipe);              
                    };
                   })
                   }) 
                    displayRecipes(ustensilArrayTag)
       
            
       
       
                   //  supression tags ustensiles
              
            closeIcon.addEventListener("click", function(e){
           //  const recipeCard = document.querySelectorAll('.card');
             let croix = e.target;
             let btnTag = croix.parentNode;
             let listeDesTags = btnTag.parentNode;
             listeDesTags.removeChild(btnTag);
                  ustensilArrayTag = displayRecipeByRemovedTag();
                   displayRecipes(ustensilArrayTag)
                  });
               })
            })       
    
 
            }
                   