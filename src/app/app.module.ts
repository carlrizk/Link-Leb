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
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SocialMediaInformationPanelComponent,
    ProfileInformationPanelComponent,
    RequestsTablePanelComponent,
    SpanWrapperComponent,
    DynamicComponentComponent,
    ProfilePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
