import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import 'hammerjs';
import { NavbarComponent } from './navbar/navbar.component';
import { SocialMediaInformationPanelComponent } from './social-media-information-panel/social-media-information-panel.component';
import { ProfileInformationPanelComponent } from './profile-information-panel/profile-information-panel.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PartenersComponent } from './parteners/parteners.component';
import { LoginCardComponent } from './login-card/login-card.component';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SocialMediaInformationPanelComponent,
    ProfileInformationPanelComponent,
    AboutUsComponent,
    PartenersComponent,
    LoginCardComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
