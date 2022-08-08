import {recipes} from "./recipes.js";


const btnIngredient = document.querySelectorAll(".btn_ingredients");
const btnUstensil = document.querySelectorAll(".btn_ustensils");
const btnAppareil = document.querySelectorAll(".btn_appareils");
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
       
        // function getSearchWidthIngredient(){
        let ingrArrayTag = []
        let btnIngredientInput= btnIngredient;
        if(btn==btnIngredientInput){
        recipes.forEach((recipe) => {
            if(recipe.name.toLowerCase().includes(btnIngredientInput) || 
            recipe.description.toLowerCase().includes(btnIngredientInput)||
            recipe.ingredients.forEach((ingredient) => {
             ingredient.ingredient.toLowerCase().includes(btnIngredientInput)
            
         })
        ){
        ingrArrayTag.push(recipe);
        console.log(ingrArrayTag);
          }
        })
       }
     else {
        ingrArrayTag = recipes;
        }
    //   }
    //   getSearchWidthIngredient();

    closeIcon.addEventListener("click", function(){
        btnIngredientTag.style.display="none";
      }); 
           })
                        })




btnUstensil.forEach(btn=>{ btn.addEventListener("click", function(){
    console.log(btn.textContent);
    let btnUstensilTag = document.createElement("div")
    btnUstensilTag.innerText = btn.textContent;
    btnUstensilTag.classList.add("btn_Ustensil_tag");
    let closeIcon= document.createElement("img")
    closeIcon.setAttribute("src", "./closeIcon.svg")
    closeIcon.classList.add("close_icon")
    btnUstensilTag.appendChild(closeIcon);
    listeTag.appendChild(btnUstensilTag);  
    const recipe = document.querySelectorAll('.card');
    recipe.forEach(r=>{console.log(r.getAttribute("id"));});
    closeIcon.addEventListener("click", function(){
        btnUstensilTag.style.display="none";
    });
})
});
btnAppareil.forEach(btn=>{ btn.addEventListener("click", function(){
    console.log(btn.textContent);
    let btnAppareilTag = document.createElement("div")
    btnAppareilTag.innerText = btn.textContent;
    btnAppareilTag.classList.add("btn_appareils_tag");
    let closeIcon= document.createElement("img")
    closeIcon.setAttribute("src", "./closeIcon.svg")
    closeIcon.classList.add("close_icon")
    btnAppareilTag.appendChild(closeIcon);
    listeTag.appendChild(btnAppareilTag);  
    const recipe = document.querySelectorAll('.card');
    recipe.forEach(r=>{console.log(r.getAttribute("id"));});
    closeIcon.addEventListener("click", function(){
        btnAppareilTag.style.display="none";
    });
})
});

  
  
  





