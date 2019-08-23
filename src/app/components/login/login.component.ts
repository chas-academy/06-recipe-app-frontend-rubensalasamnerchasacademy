import { Component, OnInit } from "@angular/core";
import { BigServiceService } from "src/app/Services/big-service.service";
import { TokenService } from "src/app/Services/token.service";
import { Router } from "@angular/router";
import { AuthService } from "src/app/Services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  public form = {
    email: null,
    password: null
  };

  public error = null;

  constructor(
    private bigService: BigServiceService,
    private token: TokenService,
    private router: Router,
    private auth: AuthService
  ) {}

  onSubmit() {
    this.bigService
      .login(this.form)
      .subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
      );
  }

  handleResponse(data) {
    /* console.log(data.user.email); */

    this.token.handle(data.access_token, data.user.email);
    this.router.navigateByUrl("/profile");
    this.auth.changeStatus(true);
  }

  handleError(error) {
    this.error = error.error.error;
  }

  ngOnInit() {}
}
