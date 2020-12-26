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
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginPanelComponent } from './components/login-panel/login-panel.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutusPageComponent } from './aboutus-page/aboutus-page.component';
import { PartnersPageComponent } from './partners-page/partners-page.component';
import { RequestformPageComponent } from './requestform-page/requestform-page.component';
import { RequestsPageComponent } from './requests-page/requests-page.component';
import { FilterPanelComponent } from './components/filter-panel/filter-panel.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { DetailsPageComponent } from './details-page/details-page.component';
import { CommentPanelComponent } from './components/comment-panel/comment-panel.component';
import { RequestDetailPanelComponent } from './components/request-detail-panel/request-detail-panel.component';

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
    FilterPanelComponent,
    DetailsPageComponent,
    CommentPanelComponent,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
