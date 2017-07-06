import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './components/application/app.component';
import { MaterialModule} from '@angular/material';

@NgModule({
    imports:      [ BrowserModule, MaterialModule],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }