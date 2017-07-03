import {NgModule, Component} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'

@Component({
    selector: 'nomad-web-app',
    template: '<h1>Nomad Web</h1>'
})
class NomadWebAppComponent {}

@NgModule({
    imports: [BrowserModule],
    declarations: [NomadWebAppComponent],
    bootstrap: [NomadWebAppComponent]
})
class NomadWebAppModule {}

platformBrowserDynamic().bootstrapModule(NomadWebAppModule);


