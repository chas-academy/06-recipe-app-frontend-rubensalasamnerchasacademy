import { Component, OnInit } from "@angular/core";
import { BigServiceService } from "../../Services/big-service.service";
import { TokenService } from "src/app/Services/token.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
  public form = {
    email: null,

    name: null,

    password: null,

    password_confirmation: null
  };

  public error = [];

  constructor(
    private BigService: BigServiceService,
    private Token: TokenService,
    private router: Router
  ) {}

  onSubmit() {
    this.BigService.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    console.log(data);
    this.Token.handle(data.access_token, data.access_user);
    this.router.navigateByUrl("/profile");
  }

  handleError(error) {
    this.error = error.error.errors;
  }

  ngOnInit() {}
}
