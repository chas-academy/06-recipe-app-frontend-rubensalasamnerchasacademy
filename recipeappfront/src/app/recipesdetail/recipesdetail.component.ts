import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { RecipesearchService } from '../recipesearch.service';

@Component({
  selector: 'app-recipesdetail',
  templateUrl: './recipesdetail.component.html',
  styleUrls: ['./recipesdetail.component.scss']
})
export class RecipesdetailComponent implements OnInit {

  myRecipes: string[];
  recipe: any;
  

  constructor(
    private route: ActivatedRoute,
    private recipeSearch: RecipesearchService,
    ) { }

  ngOnInit() {
    this.recipeSearch.getRecipe(this.route.snapshot.params['id']).subscribe(data => {
      this.recipe = data.hits.map(hit => hit.recipe)
      
      /* console.log(this.recipeList); */
    });

  
  }

}
