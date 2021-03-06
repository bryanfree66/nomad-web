import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './components/application/app.component';
import { HeaderComponent }  from './components/header/header.component';
import { MaterialModule} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    { path: 'nomad-home', component: AppComponent },
    /*{ path: '**', component: PageNotFoundComponent }*/
];

@NgModule({
    imports:      [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true }
         ),
        BrowserModule,
        MaterialModule
    ],
    declarations: [ AppComponent, HeaderComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }