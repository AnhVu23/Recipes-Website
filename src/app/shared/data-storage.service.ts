import { Recipe } from './../recipes/recipe.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Response } from '@angular/http';
import {AuthService} from "../auth/auth.service";

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService) { }

  storeRecipes() {
    const token = this.authService.getToken();
    const settings = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };
    return this.http.put('https://recipe-book-angular-f8505.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes(),
      settings);
  }

  getRecipes() {
    const token = this.authService.getToken();
    return this.http.get('https://recipe-book-angular-f8505.firebaseio.com/recipes.json?auth=' + token);
  }
}
