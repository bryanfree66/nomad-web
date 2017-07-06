import {Component} from '@angular/core';

@Component({
    selector: 'welcome',
    template: '<H1>Welcome to {{title}}</H1>'
})
export class AppComponent {
    title: string;

    constructor() {
        this.title = 'Nomad Web';
    }
}