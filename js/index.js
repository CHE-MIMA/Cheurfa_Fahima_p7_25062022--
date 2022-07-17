import {recipes} from "./recipes.js";
console.log(recipes);
let ingredientsList=new Set();
let   ustensilsList= new Set();
 

const main = document.getElementById("card-grid");
for (let index = 0; index < recipes.length; index++) {
    const ingredientsTb = recipes[index].ingredients;
    const ustensilsTb = recipes[index].ustensils;
    const appareilTb= recipes[index].appliance;

    console.log(appareilTb);
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
        console.log(ingredientsTb[index].ingredient);
       

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
       
       document.getElementById("liste_appareils").textContent +=appareilTb.toLowerCase();
     
        // for (let index = 0; index < appareilTb; index++){
        //     appareilsList.add(appareilTb[index].toLowerCase()); }
        for (let index = 0; index < ustensilsTb.length; index++){
            ustensilsList.add(ustensilsTb[index].toLowerCase()); 
            // document.getElementById("liste_ustensiles").textContent +=ustensilsTb[index];    
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
document.getElementById("btn-ingredients").addEventListeneur('click', function(){
    document.getElementById("liste_ingredients").style.display='block';
});
document.getElementById("btn-ustensils").addEventListeneur('click', function(){
    document.getElementById("liste_ustensiles").style.display="block";
});

// for(let appareil of appareilsList ){
//     let btnAppareil = document.createElement("button")
//     btnAppareil.textContent += appareil
//     document.getElementById("liste_appareils").appendChild(btnAppareil);  
// }
// document.addEventListener("keyup", "")