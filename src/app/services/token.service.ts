import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TokenService {
  private iss = {
    login: "http://recipeappbackend.test/api/login",
    signup: "http://recipeappbackend.test/api/signup"
  };

  constructor() {}

  handle(token, email) {
    this.set(token, email);
  }

  set(token, email) {
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
  }

  get() {
    return localStorage.getItem("token");
  }

  remove() {
    localStorage.removeItem("token");
  }

  isValid() {
    /* const token = this.get();
    console.log(token);
    console.log(typeof token)
    localStorage.setItem(token.email);
    if (this.get()) {
      const payload = this.payload(token)
      if (payload) {
        
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
        
      }
    }

    return false; */
    const token = this.get();
    if (token) {
      return true;
    } else {
      return false;
    }
  }

  payload(token) {
    /* const payload = token.split('.')[1];
    return this.decode(payload); */
    return this.decode(token);
  }

  decode(payload) {
    /* return JSON.parse(atob(payload)); */
    var base64Url = payload.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    return JSON.parse(atob(base64));
  }

  loggedIn() {
    return this.isValid();
  }
}
