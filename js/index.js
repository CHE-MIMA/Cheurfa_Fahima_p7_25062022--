import {recipes} from "./recipes.js";
import { displayAppareils} from "./filters.js";
import {displayTags} from "./tag.js";
displayRecipes(recipes);
// console.log(recipes);
 export function displayRecipes(recipes){
//  on crée une nouveau tableau d'ingrédients pour effacer les doublons
let newIngredientsList=new Set();
// on crée un nouveau tableau ustensils pour eviter des doublons 
let  newUstensilsList= new Set();

// on boucle sur recipes pour recupérer les tableaux ingredients et ustensils
const main = document.getElementById("card-grid");
main.innerHTML="";
for (let index = 0; index < recipes.length; index++) {
    let ingredientsTb = recipes[index].ingredients;
    let ustensilsTb = recipes[index].ustensils;

//  alimentation des recettes dans la div card 
    const divCard = document.createElement("div")
    divCard.classList.add("card")
    divCard.setAttribute("id",recipes[index].id)
    const img = document.createElement("div")
    img.classList.add("card_image")
    const divTitle = document.createElement("div")
    divTitle.classList.add("card_title_time")
    const title= document.createElement("h1");
     title.textContent = recipes[index].name;
     title.classList.add("card-title")
     const divTime= document.createElement("div");
     divTime.classList.add("div-time");
     const iconTime= document.createElement("img");
     iconTime.classList.add("icon-time");
     iconTime.setAttribute("src","icon-time.png");
     const time = document.createElement("h2")
     time.textContent = recipes[index].time+" "+"min";
     time.classList.add("card-time")
     const description = document.createElement("span");
     description.textContent = recipes[index].description;
     description.classList.add("card-description")
    const ingredientsDiv = document.createElement("div");
    ingredientsDiv.classList.add("div-ingredients")
    const titleQantityDiv = document.createElement("div");
    titleQantityDiv.classList.add("div-title_quantity")


// on boucle sur le tableau des ingredients  
    for (let index = 0; index < ingredientsTb.length; index++){

//  on alimente les ingredients dans les cards des recettes 
         newIngredientsList.add(ingredientsTb[index].ingredient.toLowerCase());
        const titleQantity = document.createElement("div");
        titleQantity.classList.add("title_quantity")
        const recepesIngredt=ingredientsTb[index].ingredient; 
        const ingredt = document.createElement("h3")
         ingredt.textContent= recepesIngredt +":"+" ";
         ingredt.classList.add("title-ingredients")
    //   on alimente les quantity
         const quantity = document.createElement("h4")
         quantity.textContent= ingredientsTb[index].quantity;
         quantity.classList.add("quantity-ingredients")
    // on alimente les unités 
         const unit = document.createElement("h5")
         unit.textContent= ingredientsTb[index].unit;
         unit.classList.add("unit-ingredients")
// tous les appenchilds des alimentations.
         main.appendChild(divCard);
        divCard.appendChild(img);
        divCard.appendChild(divTitle); 
        divTitle.appendChild(title);
        divTitle.appendChild(divTime)
        divTime.appendChild(iconTime);  
        divTime.appendChild(time);
        divCard.appendChild(ingredientsDiv);
        ingredientsDiv.appendChild( titleQantityDiv);
        titleQantityDiv.appendChild( titleQantity);
        titleQantity.appendChild(ingredt);
        titleQantity.appendChild(quantity)
       titleQantity.appendChild(unit)
       ingredientsDiv.appendChild(description)   
   }
 
   // on boucle sur le tableau des ustenslis
        for (let index = 0; index < ustensilsTb.length; index++){
            newUstensilsList.add(ustensilsTb[index].toLowerCase());         
        }
}

 //  message "pas de recette disponible"
 const recipesCard=document.getElementById("card-grid");
  if(recipesCard.innerHTML== "") {
    const noRecipesDiv = document.createElement("div")
    noRecipesDiv.textContent = "Il n'y a pas de recette correspondant à votre recherche."
    noRecipesDiv.classList.add("noRecipes");
    recipesCard.appendChild(noRecipesDiv);
}

    //  on filtres la liste ingredients >> Event listener input du filtre ingrédients
    const searchIngredients=document.getElementById("ingredient-search")
    const listeIngredient= document.getElementById("liste_ingredients");
    searchIngredients.addEventListener("keyup", (e) => {
        const value = e.target.value
        console.log(value);
        let newIngredientsSet = new Set();
        newIngredientsList.forEach((ingredient) => {
            if(ingredient.toLowerCase().includes(value.toLowerCase())) {
                newIngredientsSet.add(ingredient);
            }
        })
        listeIngredient.innerHTML = ""                        
        for(let ingredient of newIngredientsSet ){
        let btnIngredient = document.createElement("button");
        btnIngredient.textContent= ingredient;
        btnIngredient.classList.add("btn_ingredients");
        
        document.getElementById("liste_ingredients").appendChild(btnIngredient);  
        }
    })

     // on filtres la liste ustensils >> Event listener input du filtre ustensils
     const searchUstensils=document.getElementById("ustensil-search")
     const listeUstensils= document.getElementById("liste_ustensiles");
     searchUstensils.addEventListener("keyup", (e) => {
        const value = e.target.value
        console.log(value);
        let newUstensilsSet = new Set();
        newUstensilsList.forEach((ustensil) => {
            if(ustensil.toLowerCase().includes(value.toLowerCase())) {
                newUstensilsSet.add(ustensil);
            }
        })
        listeUstensils.innerHTML = ""                        
        for(let ustensil of newUstensilsSet ){
        
        let btnUstensiles = document.createElement("button");
        btnUstensiles.textContent= ustensil;
        btnUstensiles.classList.add("btn_ustensils");
        
        document.getElementById("liste_ustensiles").appendChild(btnUstensiles);  
        }
    }) 

displayIngredients(newIngredientsList);
displayUstensils(newUstensilsList);
displayAppareils(recipes);
displayTags();
}
// on reaffiche le liste ingredient apres le filtres
export function displayIngredients(newIngredientsLists){
    const listeIngredient=document.getElementById("liste_ingredients");
    listeIngredient.innerHTML='';
    let newIngredientsList = new Set(newIngredientsLists);
    for(let ingredient of newIngredientsList ){
    let btnIngredient = document.createElement("button");
    btnIngredient.textContent= ingredient;
    btnIngredient.classList.add("btn_ingredients");
    listeIngredient.appendChild(btnIngredient);  
    }
    }
    // on reaffiche le liste ustensils apres le filtres
    export function displayUstensils(newUstensilsLists){ 
        const listeUstensils=document.getElementById("liste_ustensiles");  
        listeUstensils.innerHTML=''
        let newUstensilsList = new Set (newUstensilsLists)  
    for(let ustensil of newUstensilsList ){
        let btnUstensiles = document.createElement("button")
        btnUstensiles.textContent = ustensil
        btnUstensiles.classList.add("btn_ustensils")
        listeUstensils.appendChild(btnUstensiles);  
        }
    }

      
        
