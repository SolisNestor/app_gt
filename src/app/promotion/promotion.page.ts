import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from './../services/data.service';

@Component({
    selector: 'app-promotion',
    templateUrl: './promotion.page.html',
    styleUrls: ['./promotion.page.scss'],
})
export class PromotionPage implements OnInit {

    private dynamicColor: string;

    data: any;

    constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService) {
        this.dynamicColor = 'primary';
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                const id = this.router.getCurrentNavigation().extras.state.id;
                this.data = dataService.getPromotion(id);
            }
        });
    }

    ngOnInit() {
    }

}
