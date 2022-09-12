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
 const recipeCard = document.querySelectorAll('.card');
 recipeCard.forEach(r=>{                          
 recipes.forEach((recipe) => { 
    console.log(r.getAttribute("id"));
    console.log(recipe.id);
    console.log(r);
    console.log(recipe.name.toLowerCase().includes(btnIngredientInput.toLowerCase()) );
    console.log(recipe.description.toLowerCase().includes(btnIngredientInput.toLowerCase()));
   let isInIngredients = false;
   recipe.ingredients.forEach((ingredient) => {
     if(ingredient.ingredient.toLowerCase().includes(btnIngredientInput.toLowerCase())){
      isInIngredients = true;
     }
    })

    if(r.getAttribute("id")==recipe.id
     //_______________________________________________          
     &&
     (recipe.name.toLowerCase().includes(btnIngredientInput.toLowerCase()) || 
     recipe.description.toLowerCase().includes(btnIngredientInput.toLowerCase())||
    isInIngredients
     )
    //_______________________________________________//           
     ){
    ingrArrayTag.push(recipe);               
     };
    })
    })  
     displayRecipes(ingrArrayTag);
    
// // supression de tags ingredients
    closeIcon.addEventListener("click", function(e){
      const recipeCard = document.querySelectorAll('.card');
      //btnIngredientTag.style.display="none";
      let croix = e.target;
      let btnTag = croix.parentNode;
      let listeDesTags = btnTag.parentNode;
      listeDesTags.removeChild(btnTag);

      recipeCard.innerHTML='';
      let listeTags=document.querySelectorAll(".btn_ingredient_tag");
      let activeTags=[];
      listeTags.forEach((currentTag)=> activeTags.push(currentTag.innerText));
      console.log('avant delete ',activeTags);
      let deletedTag = e.target.parentNode.innerText;
      console.log(deletedTag); 
      activeTags = activeTags.filter(function(currentTag) { return currentTag !== deletedTag })
      console.log('apres delete ',activeTags);

      recipes.forEach((recipe) => { 
         const recipeCard = document.querySelectorAll('.card');
         recipeCard.forEach(r=>{
            // console.log(r.getAttribute("id"));
            // console.log(recipe.id);
            if(listeTags!=undefined){
            if(r.getAttribute("id")==recipe.id
             //_______________________________________________          
             &&
             (recipe.name.toLowerCase().includes(deletedTag.toLowerCase()) || 
             recipe.description.toLowerCase().includes(deletedTag.toLowerCase())
             )
            //_______________________________________________//           
             ){
            ingrArrayTag.push();               
             };
            }
           
            }) })  
             displayRecipes(ingrArrayTag);
             });
          })       
            })
       


            
            // console.log(btnAppareil);
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
               const recipeCard = document.querySelectorAll('.card');
                recipeCard.forEach(r=>{                        
                recipes.forEach((recipe) => { 
                
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
       
                      //  supression tags appareils
                      
            closeIcon.addEventListener("click", function(e){
             const recipeCard = document.querySelectorAll('.card');
         
             let croix = e.target;
             let btnTag = croix.parentNode;
             let listeDesTags = btnTag.parentNode;
             listeDesTags.removeChild(btnTag);
       
             recipeCard.innerHTML='';
             let listeTags=document.querySelectorAll(".btn_appareils_tag");
             let activeTags=[];
             listeTags.forEach((currentTag)=> activeTags.push(currentTag.innerText));
             console.log('avant delete ',activeTags);
             let deletedTag = e.target.parentNode.innerText;
             console.log(deletedTag); 
             activeTags = activeTags.filter(function(currentTag) { return currentTag !== deletedTag })
             console.log('apres delete ',activeTags);
       
             recipes.forEach((recipe) => { 
                const recipeCard = document.querySelectorAll('.card');
                recipeCard.forEach(r=>{
                   // console.log(r.getAttribute("id"));
                   // console.log(recipe.id);
                   if(listeTags!=undefined){
                   if(r.getAttribute("id")==recipe.id
                    //_______________________________________________          
                    &&
                    (recipe.name.toLowerCase().includes(deletedTag.toLowerCase()) || 
                    recipe.description.toLowerCase().includes(deletedTag.toLowerCase())
                    )
                   //_______________________________________________//           
                    ){
                   appareilArrayTag.push();               
                    };
                   }
                  
                   }) })  
                    displayRecipes(appareilArrayTag);
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
             const recipeCard = document.querySelectorAll('.card');
         
             let croix = e.target;
             let btnTag = croix.parentNode;
             let listeDesTags = btnTag.parentNode;
             listeDesTags.removeChild(btnTag);
       
             recipeCard.innerHTML='';
             let listeTags=document.querySelectorAll(".btn_Ustensil_tag");
             let activeTags=[];
             listeTags.forEach((currentTag)=> activeTags.push(currentTag.innerText));
             console.log('avant delete ',activeTags);
             let deletedTag = e.target.parentNode.innerText;
             console.log(deletedTag); 
             activeTags = activeTags.filter(function(currentTag) { return currentTag !== deletedTag })
             console.log('apres delete ',activeTags);
       
             recipes.forEach((recipe) => { 
                const recipeCard = document.querySelectorAll('.card');
                recipeCard.forEach(r=>{
                   // console.log(r.getAttribute("id"));
                   // console.log(recipe.id);
                   if(listeTags!=undefined){
                   if(r.getAttribute("id")==recipe.id
                    //_______________________________________________          
                    &&
                    (recipe.name.toLowerCase().includes(deletedTag.toLowerCase()) || 
                    recipe.description.toLowerCase().includes(deletedTag.toLowerCase())
                    )
                   //_______________________________________________//           
                    ){
                   ustensilArrayTag.push();               
                    };
                   }
                  
                   }) })  
                    displayRecipes(ustensilArrayTag);
                    });
                 })       
                   })
         }
      
