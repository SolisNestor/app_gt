import {Component, OnInit} from '@angular/core';
import {DataService} from './../services/data.service';
import {NavigationExtras, Router} from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-promotions',
    templateUrl: './promotions.page.html',
    styleUrls: ['./promotions.page.scss'],
})
export class PromotionsPage {

    private dynamicColor: string;


    constructor(private dataService: DataService, private navCtrl: NavController) {
        this.dynamicColor = 'primary';
    }

    promotions = this.dataService.getAllData();

    goToPromo(data) {
        const navigationExtras: NavigationExtras = {
            state: {
                id: data
            }
        };
        this.navCtrl.navigateForward('/promotion', navigationExtras);
    }

}
