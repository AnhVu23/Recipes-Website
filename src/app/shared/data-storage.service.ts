
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import {AuthService} from '../auth/auth.service';
import { HttpRequest } from '@angular/common/http';

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService) { }

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
    const token = this.authService.getToken();
    return this.http.get('https://recipe-book-angular-f8505.firebaseio.com/recipes.json', {
      observe: 'body',
      responseType: 'json'
    });
  }
}
