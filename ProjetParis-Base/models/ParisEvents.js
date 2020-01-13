import config from '../app/config.js';

export default class ParisEvents {

    // cette méthode doit retourner le resultat au format json "retravaillé" pour retourner 
    // uniquement les données qui nous intéresse
    // getAll(keyword = '', dateStart = new Date().getFullYear(), sortBy = '') {
    //     return fetch(config.openDataURL + "&q=" + keyword + "&refine.date_end=" + dateStart + "&sort=" + sortBy + "&rows=100").then((response)=> {return response.json()}).then((obj)=>{console.log(obj)});
    // }
    // }

    getAll(keyword = '', dateStart = new Date().getFullYear(), sortBy = '') {

        return fetch(`${config.openDataURL}&q=${keyword}&sort=${sortBy}&refine.date_start=${dateStart}&rows=100`)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                return json.records.map(element => { return { 
                    category: element.fields.category, 
                    title:   element.fields.title,
                    address_street : element.fields.address_street,
                    cover_url:  element.fields.cover_url,
                    cover_alt: element.fields.cover_alt,
                } })
            })
    }
}
