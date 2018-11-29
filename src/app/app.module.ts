import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatNativeDateModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';

//componentes
import { AppComponent } from './app.component';
import { PruebaComponent } from './prueba/prueba.component';
import { InicioComponent } from './inicio/inicio.component';
import { EncuestaComponent } from './encuesta/encuesta.component';

//ruteo
import {RouterModule,Routes} from '@angular/router';
const routes: Routes =[
  { path:'prueba',component:PruebaComponent },
  { path:'encuesta',component:EncuestaComponent },
  { path:'',component:InicioComponent,pathMatch:'full'},
  { path:'**',redirectTo:'/',pathMatch:'full'}];

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    InicioComponent,
    EncuestaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,MatButtonModule,MatGridListModule,FormsModule,MatListModule,MatInputModule
    ,MatDatepickerModule,MatRadioModule,MatNativeDateModule,MatSelectModule,ReactiveFormsModule,MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
