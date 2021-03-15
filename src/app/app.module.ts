
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import the CalendarModule for the Calendar component
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { AppComponent }  from './app.component';

@NgModule({
  //declaration of CalendarModule into NgModule
  imports:      [ BrowserModule, CalendarModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
