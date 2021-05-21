import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetaljniPrikazComponent } from './components/detaljni-prikaz/detaljni-prikaz.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RestoranComponent } from './components/restoran/restoran.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'restoran', component: DetaljniPrikazComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
