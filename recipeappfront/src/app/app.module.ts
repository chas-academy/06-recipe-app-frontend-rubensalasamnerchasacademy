import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeslistComponent } from './recipeslist/recipeslist.component';
import { RecipesdetailComponent } from './recipesdetail/recipesdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeslistComponent,
    RecipesdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
