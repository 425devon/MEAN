import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import{ HomeComponent } from './home/home.component';
import{ MineComponent } from './mine/mine.component';
import{ BuyComponent } from './buy/buy.component';
import{ SellComponent } from './sell/sell.component';
import{ BrowseComponent } from './browse/browse.component';

const routes: Routes =[
  { path: 'home', component: HomeComponent },
  { path: 'mine', component: MineComponent },
  { path: 'buy', component: BuyComponent },
  { path: 'sell', component: SellComponent },
  { path: 'browse', component: BrowseComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
