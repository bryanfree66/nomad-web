import {Component, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

@Component({
    selector: "nomad-web-app",
    template: "<h1>Nomad Web</h1>",
})
class NomadWebAppComponent {}

// tslint:disable-next-line:max-classes-per-file
@NgModule({
    bootstrap: [NomadWebAppComponent],
    declarations: [NomadWebAppComponent],
    imports: [BrowserModule],
})
class NomadWebAppModule {}

platformBrowserDynamic().bootstrapModule(NomadWebAppModule);
