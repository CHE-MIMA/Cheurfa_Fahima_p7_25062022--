import {recipes} from "./recipes.js";
console.log(recipes);
const main = document.getElementById("recettes");
for (let index = 0; index < recipes.length; index++) {
    const paragraph= document.createElement("h2");
     paragraph.textContent = recipes[index].name;
 main.appendChild(paragraph);   
    
}