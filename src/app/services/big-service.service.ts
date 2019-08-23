import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Title } from "@angular/platform-browser";
import { TokenService } from "./token.service";

@Injectable({
  providedIn: "root"
})
export class BigServiceService {
  constructor(private http: HttpClient, private Token: TokenService) {}

  currentEmail = localStorage.getItem("email");

  private baseUrl = "http://recipeappbackend.test/api";
  public package: {};

  signup(data) {
    return this.http.post(`${this.baseUrl}/signup`, data);
  }

  login(data) {
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  addRecipe(data) {
    return this.http.post(`${this.baseUrl}/recipesdetail`, data, {
      headers: new HttpHeaders({
        Authorization: "Bearer " + this.Token.get()
      })
    });
  }

  getRecipes() {
    return this.http.get(`${this.baseUrl}/recipeslist`, {
      headers: new HttpHeaders({
        Authorization: "Bearer " + this.Token.get()
      })
    });
  }

  deleteRecipe(recipe) {
    return this.http.delete<any>(`${this.baseUrl}/reciperemove/${recipe}`, {
      headers: new HttpHeaders({
        Authorization: "Bearer " + this.Token.get()
      })
    });
  }
}
