import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { recipeSearchService } from './recipesearch.service';
import { RecipesdetailComponent } from './recipesdetail/recipesdetail.component';
import { RecipeslistComponent } from './recipeslist/recipeslist.component';
/* import { MyrecipesComponent } from './myrecipes/myrecipes.component'; */
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BeforeLoginService } from './Services/before-login.service';
import { AfterLoginService } from './Services/after-login.service';



const routes: Routes = [
  { path: '', redirectTo: '/recipeslist', pathMatch: 'full'},
  { path : 'recipeslist', component: RecipeslistComponent},
  { path : 'recipesdetail/:id', component: RecipesdetailComponent},
  { path : 'login', component: LoginComponent, canActivate: [BeforeLoginService]},
  { path : 'signup', component: SignupComponent, canActivate: [BeforeLoginService]},
  { path : 'profile', component: ProfileComponent, canActivate: [AfterLoginService]},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
