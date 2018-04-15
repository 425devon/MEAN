import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';
import { QuoteComponent } from './quote/quote.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'add', component: AddComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'show/:id', component: ShowComponent },
  { path: 'quote/:id', component: QuoteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
