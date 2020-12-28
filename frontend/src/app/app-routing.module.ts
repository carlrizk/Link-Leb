import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedInGuard } from './guards/logged-in.guard';
import { NotLoggedInGuard } from './guards/not-logged-in.guard';
import { AboutusPageComponent } from './pages/aboutus-page/aboutus-page.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PartnersPageComponent } from './pages/partners-page/partners-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { RequestformPageComponent } from './pages/requestform-page/requestform-page.component';
import { RequestsPageComponent } from './pages/requests-page/requests-page.component';
import { UserResolver } from './resolvers/user.resolver';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent, canActivate: [NotLoggedInGuard] },
  { path: 'profile', component: ProfilePageComponent, canActivate: [LoggedInGuard], resolve: { user: UserResolver } },
  { path: 'aboutus', component: AboutusPageComponent },
  { path: 'partners', component: PartnersPageComponent },
  { path: 'requestform', component: RequestformPageComponent },
  { path: 'requests', component: RequestsPageComponent, canActivate: [LoggedInGuard] },
  { path: 'details', component: DetailsPageComponent, canActivate: [LoggedInGuard] },
  { path: '', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
