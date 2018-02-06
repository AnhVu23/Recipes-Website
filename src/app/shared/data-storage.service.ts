import { Recipe } from './../recipes/recipe.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Response } from '@angular/http';

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient,
    private recipeService: RecipeService) { }

  storeRecipes() {
    const settings = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };
    return this.http.put('https://recipe-book-angular-f8505.firebaseio.com/recipes.json', this.recipeService.getRecipes(),
      settings);
  }

  getRecipes() {
    return this.http.get('https://recipe-book-angular-f8505.firebaseio.com/recipes.json');
  }
}
