
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { HttpRequest } from '@angular/common/http';

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient,
    private recipeService: RecipeService) { }

  storeRecipes() {
    /*return this.http.put('https://recipe-book-angular-f8505.firebaseio.com/recipes.json', this.recipeService.getRecipes(),
      {
        observe: 'body',
        params: new HttpParams().set('auth', token)
      });*/
      const req = new HttpRequest('PUT', 'https://recipe-book-angular-f8505.firebaseio.com/recipes.json',
      this.recipeService.getRecipes(), {
        reportProgress: true
      });
      return this.http.request(req);
  }

  getRecipes() {
    return this.http.get('https://recipe-book-angular-f8505.firebaseio.com/recipes.json', {
      observe: 'body',
      responseType: 'json'
    });
  }
}
