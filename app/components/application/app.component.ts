import {Component} from '@angular/core';

@Component({
    selector: 'nomad-application',
    templateUrl: './app/components/application/application.html'
})
export class AppComponent {
    innerHeight: any;
    innerWidth: any;

    constructor(){
        // 75% screen height
        this.innerHeight = (window.screen.height * .75) + "px";
        this.innerWidth = (window.screen.width * .986) + "px";
    }

    getHeight(){
        return this.innerHeight;
    }

    getWidth(){
        return this.innerWidth;
    }
}