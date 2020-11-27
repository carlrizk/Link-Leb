import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PartenersComponent } from './parteners/parteners.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import {RequestFormComponent} from './request-form/request-form.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'profile', component: ProfilePageComponent},
  { path: 'aboutus', component: AboutUsComponent},
  { path: 'parteners', component: PartenersComponent},
  { path: 'requestform', component: RequestFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
