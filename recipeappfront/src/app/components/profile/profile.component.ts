import { Component, OnInit } from '@angular/core';
import { BigServiceService } from 'src/app/Services/big-service.service';
import { TokenService } from 'src/app/Services/token.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public error = null;

  currentEmail = localStorage.getItem('email')

  recipes = []

  constructor(
    private bigService: BigServiceService,
    private token: TokenService,
  ) { }

  
  
  handleResponse(data)
  {
    
    console.log(data.data);
     data.data.forEach(element => {
      if(element.email == this.currentEmail ) {
       this.recipes.push(element)
       console.log(element.email);
      }
       
    });
    console.log(this.recipes + 'hello');
    console.log(data);
    
    console.log(Object.values(data));
    /* this.Token.handle(data.access_token);
    this.router.navigateByUrl('/profile'); */

  }

  deleteRecipe(recipe) 
  { 
    console.log(typeof recipe);
    this.bigService.deleteRecipe(recipe).subscribe(
      data => console.log(data)
    )
  }


  handleError(error) {
    this.error = error.error.errors;
  }

  /* getAllRecipes() {
    
    this.bigService.getRecipes().subscribe(
      res => {
        res.data.forEach(get => {
          if (get.email == email) this.recipes.push(get)
        });
        console.log(this.recipes);
      });
  }
 */
  test() {
   /*  localStorage.getItem('email');
    let email = localStorage;
    this.bigService.getRecipes().subscribe(response => {
      response.data.forEach(e => {
        if (e.email == email) this.recipes.push(e)
      });
      console.log(this.recipes);
    }); */
  }

  
  ngOnInit() {
    
    this.bigService.getRecipes().subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    ); 
    /* this.getRecipes; */
    
  }

}
