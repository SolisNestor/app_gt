import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor() {
    }

    private promotions: any = [
        {id: 1, name: 'Promoción 1', price: 'Q.200', short_description: 'Esa es una promoción..', long_description: 'Esta es una descripción más larga, explica toda la informacion de la promoción con sus detalles y beneficios', img: 'assets/img/promo_imagen.jpg'},
        {id: 2, name: 'Promoción 2', price: 'Q.300', short_description: 'Esa es una promoción..', long_description: 'Esta es una descripción más larga, explica toda la informacion de la promoción con sus detalles y beneficios', img: 'assets/img/promo_imagen.jpg'},
        {id: 3, name: 'Promoción 3', price: 'Q.100', short_description: 'Esa es una promoción..', long_description: 'Esta es una descripción más larga, explica toda la informacion de la promoción con sus detalles y beneficios', img: 'assets/img/promo_imagen.jpg'},
        {id: 4, name: 'Promoción 4', price: 'Q.400', short_description: 'Esa es una promoción..', long_description: 'Esta es una descripción más larga, explica toda la informacion de la promoción con sus detalles y beneficios', img: 'assets/img/promo_imagen.jpg'},
        {id: 5, name: 'Promoción 5', price: 'Q.500', short_description: 'Esa es una promoción..', long_description: 'Esta es una descripción más larga, explica toda la informacion de la promoción con sus detalles y beneficios', img: 'assets/img/promo_imagen.jpg'},
        {id: 6, name: 'Promoción 6', price: 'Q.700', short_description: 'Esa es una promoción..', long_description: 'Esta es una descripción más larga, explica toda la informacion de la promoción con sus detalles y beneficios', img: 'assets/img/promo_imagen.jpg'},
        {id: 7, name: 'Promoción 7', price: 'Q.800', short_description: 'Esa es una promoción..', long_description: 'Esta es una descripción más larga, explica toda la informacion de la promoción con sus detalles y beneficios', img: 'assets/img/promo_imagen.jpg'},
        {id: 8, name: 'Promoción 8', price: 'Q.1000', short_description: 'Esa es una promoción..', long_description: 'Esta es una descripción más larga, explica toda la informacion de la promoción con sus detalles y beneficios', img: 'assets/img/promo_imagen.jpg'},
        {id: 9, name: 'Promoción 9', price: 'Q.60', short_description: 'Esa es una promoción..', long_description: 'Esta es una descripción más larga, explica toda la informacion de la promoción con sus detalles y beneficios', img: 'assets/img/promo_imagen.jpg'},
        {id: 10, name: 'Promoción 10', price: 'Q.50', short_description: 'Esa es una promoción..', long_description: 'Esta es una descripción más larga, explica toda la informacion de la promoción con sus detalles y beneficios', img: 'assets/img/promo_imagen.jpg'}
    ];

    getPromotion(id) {
        return this.promotions.find(element => element.id === id);
    }

    getAllData() {
        return this.promotions;
    }
}
