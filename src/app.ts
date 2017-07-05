import {Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@Component({
    selector: 'welcome-component',
    template: '<H1>Welcome to {{title}}</H1>'
})

class RootComponent {
    title: string;

    constructor() {
        this.title = 'Nomad Web';
    }
}

@NgModule({
    imports: [BrowserModule],
    declarations: [RootComponent],
    bootstrap: [RootComponent],
})

export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
