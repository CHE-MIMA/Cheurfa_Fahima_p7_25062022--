import {recipes} from "./recipes.js";
displayRecipes(recipes);
console.log(recipes);
 export function displayRecipes(recipes){
let ingredientsList=new Set();
let   ustensilsList= new Set();
let appareilsList=  new Set();
let appareilsString= '';
const main = document.getElementById("card-grid");
for (let index = 0; index < recipes.length; index++) {
    const ingredientsTb = recipes[index].ingredients;
    const ustensilsTb = recipes[index].ustensils;
    const appareilTb= recipes[index].appliance;
 
    // console.log(appareilTb);
    const divCard = document.createElement("div")
    divCard.classList.add("card")
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

    for (let index = 0; index < ingredientsTb.length; index++){
        // console.log(ingredientsTb[index].ingredient);
       

         ingredientsList.add(ingredientsTb[index].ingredient.toLowerCase());
        const titleQantity = document.createElement("div");
        titleQantity.classList.add("title_quantity")
        const recepesIngredt=ingredientsTb[index].ingredient; 
        const ingredt = document.createElement("h3")
         ingredt.textContent= recepesIngredt +":"+" ";
         ingredt.classList.add("title-ingredients")
      
         const quantity = document.createElement("h4")
         quantity.textContent= ingredientsTb[index].quantity;
         quantity.classList.add("quantity-ingredients")
        
         const unit = document.createElement("h5")
         unit.textContent= ingredientsTb[index].unit;
         unit.classList.add("unit-ingredients")
  
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
 ingredientsDiv.appendChild(description);


        }
   

            
        for (let index = 0; index < ustensilsTb.length; index++){
            ustensilsList.add(ustensilsTb[index].toLowerCase()); 
            // document.getElementById("liste_ustensiles").textContent +=ustensilsTb[index];    
        }
        
        appareilsString +=appareilTb;
        
    }
  
    const appareilsArray = appareilsString.split(' ');
    for (let index = 0; index < appareilsArray.length; index++){
        appareilsList.add(appareilsArray[index].toLowerCase()); }



    function displayFiltres(){
for(let appareil of appareilsList ){
    let btnAppareil = document.createElement("button")
if(appareilsString != undefined){
    btnAppareil.textContent = appareil;
    btnAppareil.classList.add("btn_appareils");
    document.getElementById("liste_appareils").appendChild(btnAppareil); 
    
}
}

for(let ingredient of ingredientsList ){

let btnIngredient = document.createElement("button");
btnIngredient.textContent= ingredient;
btnIngredient.classList.add("btn_ingredients");

document.getElementById("liste_ingredients").appendChild(btnIngredient);  
}


for(let ustensil of ustensilsList ){

let btnUstensiles = document.createElement("button")
btnUstensiles.textContent = ustensil
btnUstensiles.classList.add("btn_ustensils")
document.getElementById("liste_ustensiles").appendChild(btnUstensiles);  
}
    }
 displayFiltres();

 const recipesCard=document.getElementById("card-grid");
  
 //  message "pas de recette disponible"
  if(recipesCard.innerHTML== "") {
    const noRecipesDiv = document.createElement("div")
    noRecipesDiv.textContent = "Il n'y a pas de recette correspondant à votre recherche."
    noRecipesDiv.classList.add("noRecipes");
    recipesCard.appendChild(noRecipesDiv);
}



 }

const btnIgredient = document.getElementById("icon-ingredients");
const listeIngredient=   document.getElementById("liste_ingredients");
const btnUstensiles = document.getElementById("icon-ustensiles");
const listeUstensils= document.getElementById("liste_ustensiles");
const btnAppareils = document.getElementById("icon-appareils");
const listeAppareils= document.getElementById("liste_appareils");
const buttonIngredients=document.getElementById("button-ingredients");
const buttonAppareils=document.getElementById("button-appareils");
const buttonUstensils=document.getElementById("button-ustensils");
const searchIngredients=document.getElementById("ingredient-search")
const searchAppareils=document.getElementById("appareil-search")
const searchUstensils=document.getElementById("ustensil-search")



// const btnUstensiles=
btnIgredient.addEventListener('click', function(){
    if( listeIngredient.style.display=='block'){
        listeIngredient.style.display='none'
        btnIgredient.style.transform = "rotate(0deg)";
        buttonIngredients.style.width="180px" ;
        searchIngredients.style.width="180px";
    }
    else{
        listeIngredient.style.display='block'
        btnIgredient.style.transform = "rotate(180deg)" 
        buttonIngredients.style.width="735px" 
        searchIngredients.style.width="735px";
    }
  
});
btnAppareils.addEventListener('click', function(){
    if( listeAppareils.style.display=='block'){
        listeAppareils.style.display='none'
        btnAppareils.style.transform = "rotate(0deg)";
        buttonAppareils.style.width="180px" ;
        searchAppareils.style.width="180px";

    }
    else{
        listeAppareils.style.display='block'
        btnAppareils.style.transform = "rotate(180deg)" 
        buttonAppareils.style.width ="732px"
        searchAppareils.style.width="732px";
    }
   
});

btnUstensiles.addEventListener('click', function(){
    if( listeUstensils.style.display=='block'){
        listeUstensils.style.display='none'
        btnUstensiles.style.transform = "rotate(0deg)";
        buttonUstensils.style.width="180px" ;
        searchUstensils.style.width="180px";
    }
    else{
        listeUstensils.style.display='block'
        btnUstensiles.style.transform = "rotate(180deg)" 
        buttonUstensils.style.width="732px";
        searchUstensils.style.width="732px";
    }
  
});


// document.addEventListener("keyup", "")