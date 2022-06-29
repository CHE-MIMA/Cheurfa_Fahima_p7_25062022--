import {recipes} from "./recipes.js";
console.log(recipes);
const main = document.getElementById("card-grid");
for (let index = 0; index < recipes.length; index++) {
    const divCard = document.createElement("div")
    divCard.classList.add("card")
    const img = document.createElement("div")
    img.classList.add("card_image")
    const divTitle = document.createElement("div")
    divTitle.classList.add("card_title_time")
    const title= document.createElement("h1");
     title.textContent = recipes[index].name;
     title.classList.add("card-title")
     const time = document.createElement("h2");
     time.textContent = recipes[index].time+" " +"min";
     time.classList.add("card-time")
     const ingredients = document.createElement("div");
    //  for (let index = 0; index < recipes.ingredients.length; index++) {
    //     recipes.ingredients[index];  
    ingredients.classList.add("card-ingredients")
     const ingredient = document.createElement("h3") 

    //  ingredient.textContent = recipes[index];
     const description = document.createElement("span");
     description.textContent = recipes[index].description;
     description.classList.add("card-description")

main.appendChild(divCard);
 divCard.appendChild(img);
 divCard.appendChild(divTitle); 
 divTitle.appendChild(title);   
 divTitle.appendChild(time)
 divCard.appendChild(ingredients);
 divCard.appendChild(description);

}