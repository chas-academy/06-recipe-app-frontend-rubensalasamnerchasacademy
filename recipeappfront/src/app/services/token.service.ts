import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private iss = {
    login: 'http://recipeappbackend/api/login',
    signup: 'http://recipeappbackend/api/signup'
  }

  constructor() { }

  handle(token, email) {
    this.set(token, email);
    
  }

  set(token, email) {
    localStorage.setItem('token', token);
    localStorage.setItem('email', email);
  }

  get() {
    return localStorage.getItem('token');
  }

  remove() {
    localStorage.removeItem('token');
  }

  isValid() {
    
    const token = this.get();
    /* console.log(token); */
    /* console.log(typeof token)
    localStorage.setItem(token.email); */
    if (this.get()) {
      const payload = this.payload(token)
      if (payload) {
        
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
        
      }
    }

    return false;
  }

  payload(token) {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload) {
    return JSON.parse(atob(payload));
  }

  loggedIn() {
    return this.isValid();
  }

  
}