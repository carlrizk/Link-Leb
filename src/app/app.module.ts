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
import { RequestsTablePanelComponent } from './requests-table-panel/requests-table-panel.component';
import { SpanWrapperComponent } from './span-wrapper/span-wrapper.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SocialMediaInformationPanelComponent,
    ProfileInformationPanelComponent,
    RequestsTablePanelComponent,
    SpanWrapperComponent,
    DynamicComponentComponent
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
