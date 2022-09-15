import {recipes} from "./recipes.js";
import { displayTags } from "./tag.js";
// variables du dom
const btnIgredient = document.getElementById("icon-ingredients");
const listeIngredient= document.getElementById("liste_ingredients");
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
     
// fonction qui affiche la liste des appareils 
displayAppareils(recipes);
      export function displayAppareils(recipes){
    let allAppareils = []
     for (let index = 0; index < recipes.length; index++) {
     let appareils= recipes[index].appliance;
     let newAppareilsList= new Set(allAppareils)
     allAppareils.push(appareils.toLowerCase())
     const listeAppareils=document.getElementById("liste_appareils");
    //  console.log( newAppareilsList);
     listeAppareils.innerHTML = ""  
     for( let appareil of newAppareilsList){
        let btnAppareil = document.createElement("button")
        btnAppareil.textContent = appareil;
        btnAppareil.classList.add("btn_appareils");
        document.getElementById("liste_appareils").appendChild(btnAppareil);   
       }

     // Event listener input qui filtre appareils
     const searchAppareils=document.getElementById("appareil-search")
        searchAppareils.addEventListener("input", (e) => {
            const value = e.target.value
            let newAppareilsSet = new Set();
            newAppareilsList.forEach((appareil) => {
                if(appareil.toLowerCase().includes(value.toLowerCase())) {
                    newAppareilsSet.add(appareil);
                }
            }) 
            listeAppareils.innerHTML = ""                        
        for(let appareil of newAppareilsSet ){
        let btnAppareil = document.createElement("button");
        btnAppareil.textContent= appareil;
        btnAppareil.classList.add("btn_appareils");
        document.getElementById("liste_appareils").appendChild(btnAppareil);  
        }                                  
        })
     }
    }

//    aparaition et desparaition des dropdown au click sur le boutton ingredients
    btnIgredient.addEventListener('click', function(){
        if( listeIngredient.style.display=='block'){
            listeIngredient.style.display='none'
            btnIgredient.style.transform = "rotate(0deg)";
            buttonIngredients.style.width="180px" ;
            searchIngredients.style.width="180px";
            searchIngredients.style.borderRadius="5px";
            buttonIngredients.style.borderRadius="5px";
        }
        else{
            listeIngredient.style.display='block'
            btnIgredient.style.transform = "rotate(180deg)" 
            buttonIngredients.style.width="730px" 
            searchIngredients.style.width="730px";
            searchIngredients.style.borderRadius="0px";
            buttonIngredients.style.borderRadius="0px";
            listeAppareils.style.display='none'
            btnAppareils.style.transform = "rotate(0deg)";
            buttonAppareils.style.width="180px" ;
            searchAppareils.style.width="180px";
            searchAppareils.style.borderRadius="5px";
            buttonAppareils.style.borderRadius="5px";
            listeUstensils.style.display='none'
            btnUstensiles.style.transform = "rotate(0deg)";
            buttonUstensils.style.width="180px" ;
            searchUstensils.style.width="180px";
            searchUstensils.style.borderRadius="5px";
            buttonUstensils.style.borderRadius="5px";
        } 
    });
    //    aparaition et desparaition des dropdown au click sur le boutton appareils
    btnAppareils.addEventListener('click', function(){
        if( listeAppareils.style.display=='block'){
            listeAppareils.style.display='none'
            btnAppareils.style.transform = "rotate(0deg)";
            buttonAppareils.style.width="180px" ;
            searchAppareils.style.width="180px";
            searchAppareils.style.borderRadius="5px";
            buttonAppareils.style.borderRadius="5px";
        }
        else{
            listeAppareils.style.display='block'
            btnAppareils.style.transform = "rotate(180deg)" 
            buttonAppareils.style.width ="730px"
            searchAppareils.style.width="730px";
            searchAppareils.style.borderRadius="0px";
            buttonAppareils.style.borderRadius="0px";
            listeIngredient.style.display='none'
            btnIgredient.style.transform = "rotate(0deg)";
            buttonIngredients.style.width="180px" ;
            searchIngredients.style.width="180px";
            searchIngredients.style.borderRadius="5px";
            buttonIngredients.style.borderRadius="5px";
            listeUstensils.style.display='none'
            btnUstensiles.style.transform = "rotate(0deg)";
            buttonUstensils.style.width="180px" ;
            searchUstensils.style.width="180px";
            searchUstensils.style.borderRadius="5px";
            buttonUstensils.style.borderRadius="5px";
        } 
    });
    //    aparaition et desparaition des dropdown au click sur le boutton ustensils
    btnUstensiles.addEventListener('click', function(){
        if( listeUstensils.style.display=='block'){
            listeUstensils.style.display='none'
            btnUstensiles.style.transform = "rotate(0deg)";
            buttonUstensils.style.width="180px" ;
            searchUstensils.style.width="180px";
            searchUstensils.style.borderRadius="5px";
            buttonUstensils.style.borderRadius="5px";
        }
        else{
            listeUstensils.style.display='block'
            btnUstensiles.style.transform = "rotate(180deg)" 
            searchUstensils.style.borderRadius="0px";
            buttonUstensils.style.borderRadius="0px";
            buttonUstensils.style.width="730px";
            searchUstensils.style.width="730px";
            listeAppareils.style.display='none'
            btnAppareils.style.transform = "rotate(0deg)";
            buttonAppareils.style.width="180px" ;
            searchAppareils.style.width="180px";
            searchAppareils.style.borderRadius="5px";
            buttonAppareils.style.borderRadius="5px";
            listeIngredient.style.display='none'
            btnIgredient.style.transform = "rotate(0deg)";
            buttonIngredients.style.width="180px" ;
            searchIngredients.style.width="180px";
            searchIngredients.style.borderRadius="5px";
            buttonIngredients.style.borderRadius="5px";
        }
    });
   
   
    
    
    
     