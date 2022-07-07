import {recipes} from "./recipes.js";
console.log(recipes);

const main = document.getElementById("card-grid");
for (let index = 0; index < recipes.length; index++) {
    const ingredientsTb = recipes[index].ingredients;

    console.log(ingredientsTb);
 

// ingredientsTb.forEach(element => {
//     console.log(ingredientsTb[index].ingredient);
//  });
   
   
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
     
    //  recipes.forEach(ingredient=> {
        const description = document.createElement("span");
        description.textContent = recipes[index].description;
        description.classList.add("card-description")
   

    const ingredientsDiv = document.createElement("div");
    ingredientsDiv.classList.add("div-ingredients")
    const titleQantityDiv = document.createElement("div");
    titleQantityDiv.classList.add("div-title_quantity")

    for (let index = 0; index < ingredientsTb.length; index++){
        console.log(ingredientsTb[index].ingredient);
       
        const titleQantity = document.createElement("div");
        titleQantity.classList.add("title_quantity")

        const ingredt = document.createElement("h3")
         ingredt.textContent= ingredientsTb[index].ingredient+":"+" ";
         ingredt.classList.add("title-ingredients")
         titleQantity.appendChild(ingredt)
         const quantity = document.createElement("h4")
         quantity.textContent= ingredientsTb[index].quantity;
         quantity.classList.add("quantity-ingredients")
         titleQantity.appendChild(quantity)
         const unit = document.createElement("h5")
         unit.textContent= ingredientsTb[index].unit;
         unit.classList.add("unit-ingredients")
         titleQantity.appendChild(unit)  
         
      
    //  ingredient.textContent = recipes[index];
  
    // });
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
 ingredientsDiv.appendChild(description);
     
      
        }
    
}
// document.addEventListener("keyup", "onchange")