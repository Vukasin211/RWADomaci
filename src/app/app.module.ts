import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestoranComponent } from './components/restoran/restoran.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './components/home/home.component';
import { RestoraniService } from './services/restorani.service';
import { DetaljniPrikazComponent } from './components/detaljni-prikaz/detaljni-prikaz.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    RestoranComponent,
    HomeComponent,
    DetaljniPrikazComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [RestoraniService],
  bootstrap: [AppComponent]
})
export class AppModule { }
