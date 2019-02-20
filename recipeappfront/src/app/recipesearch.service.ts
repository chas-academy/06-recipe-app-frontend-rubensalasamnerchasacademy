import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesearchService {

  url = `https://api.edamam.com/`;
  appId = '9dfadc1b';
  appKey = 'd93f4d8f13796e636c9c59f837390c5a';
  results: string;
  healthLabel;
  dietLabel;


  
  constructor(private http: HttpClient ) {
    
  }

  
 
  getRecipes(results: string, healthLabel: string ): Observable<any> {


   

   return this.http.get<any>(this.url + 'search?q=' + results + '&app_id=' + this.appId + '&app_key=' + this.appKey + '&from=0&to=10&health=alcohol-free&' + healthLabel)
 }

 getRecipe(id): Observable<any> {
   
  return this.http.get(this.url + 'search?q=' + id + '&app_id=' + this.appId + '&app_key=' + this.appKey + '&from=0&to=1')//.pipe(
}

 
}


