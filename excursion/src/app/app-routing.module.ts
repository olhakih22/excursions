import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommentsComponent} from "./components/comments/comments.component";
import {FilialsComponent} from "./components/filials/filials.component";
import {AboutComponent} from "./components/about/about.component";
import {PersonalComponent} from "./components/personal/personal.component";
import {ToursComponent} from "./components/tours/tours.component";
import {CityComponent} from "./components/city/city.component";
import {SingleExcursionComponent} from "./components/single-excursion/single-excursion.component";


const routes: Routes = [
  {path: '', component: AboutComponent},
  {path: 'fidBack', component: CommentsComponent},
  {path: 'fillies', component: FilialsComponent},
  {path: 'personal', component: PersonalComponent},
  {path: 'tours', component: ToursComponent},
  {path: 'tours/:id', component: CityComponent},
  {path: 'tours/:_id/:id', component: SingleExcursionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
