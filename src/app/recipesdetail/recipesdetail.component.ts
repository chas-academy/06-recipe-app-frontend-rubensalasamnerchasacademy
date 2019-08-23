import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { recipeSearchService } from "../recipesearch.service";
import { RecipelistService } from "../recipelist.service";
import { BigServiceService } from "../Services/big-service.service";
import { AuthService } from "../Services/auth.service";

@Component({
  selector: "app-recipesdetail",
  templateUrl: "./recipesdetail.component.html",
  styleUrls: ["./recipesdetail.component.scss"]
})
export class RecipesdetailComponent implements OnInit {
  public error = [];
  public saveRecipeBackEnd: {};

  public email: {};

  myRecipes: string[];
  test: string;
  recipe: any;
  message: any;
  allRecipes: any[];

  label: any;
  img: any;
  public package: {};
  
  public loggedIn: boolean;

  constructor(
    private route: ActivatedRoute,
    private recipeSearch: recipeSearchService,
    private recipeList: RecipelistService,
    private bigService: BigServiceService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.auth.authStatus.subscribe(value => (this.loggedIn = value));
    this.recipeSearch
      .getRecipe(this.route.snapshot.params["id"])
      .subscribe(data => {
        console.log(data);
        this.recipe = data.hits.map(hit => hit.recipe);

        console.log(this.recipeList);
      });

    this.recipeList.currentMessage.subscribe(
      message => (this.message = message)
    );
  }

  saveRecipe(recipe) {
    this.package = {
      title: recipe.label,
      img: recipe.image,
    };
    this.bigService
      .addRecipe(this.package)
      .subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
      );
  }

  handleResponse(data) {
    console.log(data);
    /* this.Token.handle(data.access_token);
    this.router.navigateByUrl('/profile'); */
  }

  handleError(error) {
    this.error = error.error.errors;
  }
}
