import app from '../app/app.js';
import ParisEvents from '../models/ParisEvents.js';

export default class Search {
    show() {      
        
        app.mvc.loadView(`search`).then(() =>{
            this.listener();
        });
    }
    
    listener() {
        var button = document.getElementById("button");

        button.addEventListener("click", (event) => {event.preventDefault();
            var champs = document.getElementById("champs").value;
            var year = document.getElementById("year").value;
            var tri = document.getElementById("tri").value;
    
            var obj = {
                champs : champs,
                year : year,
                tri : tri
            }

            this.search(obj);
        });
    }

    search( params = {} ) {
        // params contiendra les différents champs du formulaire
        // nous utiliserons le fetch (dans la classe ParisEvents) pour appeler l'api. 
        // ici nous instancierons la classe ParisEvents et ferons appel à la methode getAll
        // en lui transmettant les différents valeurs

        var paris = new ParisEvents();
        paris.getAll(params.champs, params.year, params.tri ).then((resultat) => {
            var template = document.querySelector("#blockResultat");
            var zoneResultat = document.querySelector("#zoneResultat");
            zoneResultat.innerHTML = "";
            resultat.forEach(element => {

                var clone = document.importNode(template.content, true);
                clone.querySelector('h3').textContent = element.title;
                clone.querySelector('img').src = element.cover_url;
                clone.querySelector('img').alt = element.cover_alt;
                clone.querySelector('p').textContent = element.address_street;
                
                zoneResultat.appendChild(clone);
            });
        });
    }
}
