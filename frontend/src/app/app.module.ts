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
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LoginPanelComponent } from './components/login-panel/login-panel.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RequestsPageComponent } from './pages/requests-page/requests-page.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { RequestDetailPanelComponent } from './components/request-detail-panel/request-detail-panel.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutusPageComponent } from './pages/aboutus-page/aboutus-page.component';
import { PartnersPageComponent } from './pages/partners-page/partners-page.component';
import { RequestformPageComponent } from './pages/requestform-page/requestform-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SocialMediaInformationPanelComponent,
    ProfileInformationPanelComponent,
    RequestsTablePanelComponent,
    ProfilePageComponent,
    LoginPageComponent,
    LoginPanelComponent,
    HomePageComponent,
    AboutusPageComponent,
    PartnersPageComponent,
    RequestformPageComponent,
    RequestsPageComponent,
    DetailsPageComponent,
    RequestDetailPanelComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
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
    MatProgressSpinnerModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
