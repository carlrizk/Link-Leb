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
import { NeedTypeIconResolver } from './resolvers/need-type-icon.resolver';
import { NeedTypesResolver } from './resolvers/need-types.resolver';
import { RequestsResolver } from './resolvers/requests.resolver';
import { SocialMediaIconsResolver } from './resolvers/social-media-icons.resolver';
import { UserResolver } from './resolvers/user.resolver';
import { RequestResolver } from './resolvers/request.resolver';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent, canActivate: [NotLoggedInGuard] },
  {
    path: 'profile', component: ProfilePageComponent,
    canActivate: [LoggedInGuard],
    resolve: { user: UserResolver, socialMediaIcons: SocialMediaIconsResolver, needTypeIcons: NeedTypeIconResolver }
  },
  { path: 'aboutus', component: AboutusPageComponent },
  { path: 'partners', component: PartnersPageComponent },
  {
    path: 'requestform', component: RequestformPageComponent,
    resolve: { needTypes: NeedTypesResolver, needTypeIcons: NeedTypeIconResolver }
  },
  {
    path: 'requests', component: RequestsPageComponent, canActivate: [LoggedInGuard],
    resolve: { requests: RequestsResolver, needTypeIcons: NeedTypeIconResolver }
  },
  { path: 'requests/:id', component: DetailsPageComponent, canActivate: [LoggedInGuard] ,
    resolve: { request: RequestResolver, needTypeIcons: NeedTypeIconResolver}
   },
  { path: '', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
