import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusPageComponent } from './aboutus-page/aboutus-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PartnersPageComponent } from './partners-page/partners-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import {RequestformPageComponent} from './requestform-page/requestform-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'profile', component: ProfilePageComponent},
  { path: 'aboutus', component: AboutusPageComponent},
  { path: 'partners', component: PartnersPageComponent},
  { path: 'requestform', component: RequestformPageComponent},
  { path: '', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
