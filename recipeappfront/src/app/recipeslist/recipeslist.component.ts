import { Component, OnInit } from '@angular/core';
import { recipeSearchService } from '../recipesearch.service';



@Component({
  selector: 'app-recipeslist',
  templateUrl: './recipeslist.component.html',
  styleUrls: ['./recipeslist.component.scss']
})
export class RecipeslistComponent implements OnInit {
  
  
  recipes: string [];
  searchinput = this.searchinput;
  route: string;
  test: any;
  highprotein = this.highprotein;
  savedRecipes = this.savedRecipes;
  healthLabel = this.healthLabel;
  
  
  


  constructor(
    private recipeSearch: recipeSearchService,
  ) {}

  
  handleRecipeSearchClick = () => {
    
    this.recipeSearch.getRecipes(this.searchinput, this.healthLabel)
      .subscribe(data => {
       
      this.recipes = data.hits.map(data => data.recipe);
      console.log(this.recipes);
      return this.recipes;
    });
   /*  console.log(this.recipes); */
  }

  testingrecipes () {
    console.log("yo");
  }

  myFunction(e) {
    this.savedRecipes = this.recipes;
    console.log(this.savedRecipes);
    console.log('chicken');
    console.log(e);
   /*  if(this.highprotein).is(':checked') {}
    this.recipes = this.recipes.filter(function (item) {
    return !item.dietLabels.includes("Balanced");
    

 }); */
  /* console.log(this.recipes); */
 
  }

  
  ngOnInit() {
    
  }

}
