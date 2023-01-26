import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AddcarComponent } from './addcar/addcar.component';
import { EditcarComponent } from './editcar/editcar.component';
import { CarComponent } from './car/car.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    HomeComponent,
    NotfoundComponent,
    AddcarComponent,
    EditcarComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
