import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{AppComponent} from '../app/app.component'
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';


import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { MapComponent } from './components/map/map.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileCardComponent,
    MapComponent,
    HomeComponent,
    AdminComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    GoogleMapsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
