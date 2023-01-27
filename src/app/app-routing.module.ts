import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './car/car.component';
import { CarsComponent } from './cars/cars.component';
import { HomeComponent } from './home/home.component';
import { AddcarComponent } from './addcar/addcar.component';
import { EditcarComponent } from './editcar/editcar.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'car/:id', component: CarComponent },
      { path: 'addcar', component: AddcarComponent },
      { path: 'cars', component: CarsComponent },
      { path: 'editcar/:id', component: EditcarComponent },
      { path: '**', component: NotfoundComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
