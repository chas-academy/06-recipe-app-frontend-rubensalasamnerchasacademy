import { Component, OnInit } from "@angular/core";
import { BigServiceService } from "src/app/Services/big-service.service";
import { TokenService } from "src/app/Services/token.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  public error = null;

  currentEmail = localStorage.getItem("email");

  recipes = [];

  constructor(
    private bigService: BigServiceService,
    private token: TokenService
  ) {}

  ngOnInit() {
    this.bigService
      .getRecipes()
      .subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
      );
    /* this.getRecipes; */
  }

  handleResponse(data) {
    data.forEach(element => {
      console.log(element);
      this.recipes.push(element);
    });
  }

  deleteRecipe(recipe) {
    console.log(recipe);
    this.bigService.deleteRecipe(recipe).subscribe(data => console.log(data));
  }

  handleError(error) {
    this.error = error.error.errors;
  }
}
