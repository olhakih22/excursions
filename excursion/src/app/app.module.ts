import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbdCarouselBasic} from './components/carousel/carousel'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { CommentsComponent } from './components/comments/comments.component';
import { PersonalComponent } from './components/personal/personal.component';
import { FilialsComponent } from './components/filials/filials.component';
import { AboutComponent } from './components/about/about.component';
import {TopMenuComponent} from "./components/top-menu/top-menu.component";
import {FooterComponent} from "./components/footer/footer.component";
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { ToursComponent } from './components/tours/tours.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import {SortPipe} from "./pipes/sort.pipe";
import {SpliceTextPipe} from "./pipes/splice-text.pipe";
import { CityComponent } from './components/city/city.component';



import { LOCALE_ID } from '@angular/core';


import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { SingleExcursionComponent } from './components/single-excursion/single-excursion.component';
import {MatSliderModule} from "@angular/material/slider";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {SortCityPipe} from "./pipes/sort-city.pipe";



// the second parameter 'ru' is optional
registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [
    NgbdCarouselBasic,
    AppComponent,
    HeaderComponent,
    TopMenuComponent,
    CommentsComponent,
    PersonalComponent,
    FilialsComponent,
    AboutComponent,
    TopMenuComponent,
    FooterComponent,
    NavBarComponent,
    FooterComponent,
    NavBarComponent,
    ToursComponent,
    SortPipe,
    SortPipe,
    SpliceTextPipe,
    SpliceTextPipe,
    CityComponent,
    SingleExcursionComponent,
    SortCityPipe,
    SortCityPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'ru' }, MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
