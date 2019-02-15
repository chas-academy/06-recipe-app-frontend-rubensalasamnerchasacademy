import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { RecipesdetailComponent } from './recipesdetail/recipesdetail.component';
import { RecipeslistComponent } from './recipeslist/recipeslist.component';

const routes: Routes = [
  {path: '', redirectTo: '/recipeslist', pathMatch: 'full'},
  { path : 'recipeslist', component: RecipeslistComponent},
  { path : 'recipesdetail/:id', component: RecipesdetailComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
