import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class BigServiceService {

  currentEmail = localStorage.getItem('email')

  private baseUrl = 'http://recipeappbackend.test/api';
  public package: {}

  constructor(private http: HttpClient) { }

  
  signup(data) {
    /* console.log(data); */
    return this.http.post(`${this.baseUrl}/signup`, data)
  }

  login(data) 
  {
    
    return this.http.post(`${this.baseUrl}/login`, data)
  }

  addRecipe(data)
  { 
    console.log(data);
    console.log(typeof(data));
   
    return this.http.post(`${this.baseUrl}/recipesdetail`, data)

  }
  /* addRecipe(title, email)
  { 
   
    return this.http.post(`${this.baseUrl}/recipesdetail`, {label: title})

  } */

  getRecipes()
  {
    
    return this.http.get(`${this.baseUrl}/recipeslist`)

  }

  deleteRecipe(recipe)
  {
    return this.http.post(`${this.baseUrl}/reciperemove`, recipe)
  }
}
