import { Component, OnInit } from '@angular/core';

import { RecipesearchService } from '../recipesearch.service';

@Component({
  selector: 'app-recipeslist',
  templateUrl: './recipeslist.component.html',
  styleUrls: ['./recipeslist.component.scss']
})
export class RecipeslistComponent implements OnInit {

  recipes: string [];
  searchinput = this.searchinput;
  route: string;
  healthLabel = this.healthLabel;

  constructor(
    private recipeSearch: RecipesearchService,
  ) { }

  handleRecipeSearchClick = () => {
    
    this.recipeSearch.getRecipes(this.searchinput, this.healthLabel)
      .subscribe(data => {
       
      this.recipes = data.hits.map(data => data.recipe);
      console.log(this.recipes);
      return this.recipes;
    });
   
  }

  ngOnInit() {
  }

}
