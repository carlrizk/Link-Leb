import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import 'hammerjs';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SocialMediaInformationPanelComponent } from './components/social-media-information-panel/social-media-information-panel.component';
import { ProfileInformationPanelComponent } from './components/profile-information-panel/profile-information-panel.component';
import { RequestsTablePanelComponent } from './components/requests-table-panel/requests-table-panel.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AboutUsComponent } from './about-us/about-us.component';
import { PartenersComponent } from './parteners/parteners.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginPanelComponent } from './components/login-panel/login-panel.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RequestFormComponent } from './request-form/request-form.component';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SocialMediaInformationPanelComponent,
    ProfileInformationPanelComponent,
    RequestsTablePanelComponent,
    ProfilePageComponent,
    AboutUsComponent,
    PartenersComponent,
    LoginPageComponent,
    LoginPanelComponent,
    RequestFormComponent
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
    MatGridListModule,
    MatDividerModule,
    MatCardModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
