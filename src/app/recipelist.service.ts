import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/';
/* import { MyrecipesComponent } from './myrecipes/myrecipes.component'; */

@Injectable({
  providedIn: 'root'
})
export class RecipelistService {

  private messageSource = new BehaviorSubject<any[]>([]);
  currentMessage = this.messageSource.asObservable();
  theRecipes: string[]
  
  constructor(
    /* private getRecipes: MyrecipesComponent, */
  ) { }

  changeMessage(message:any):void{
    this.messageSource.next(this.messageSource.getValue().concat([message]));
  }

  getAllRecipesNow() {
    return this.currentMessage;
  }
}