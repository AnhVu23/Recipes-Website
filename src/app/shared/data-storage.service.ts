
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService) { }

  storeRecipes() {
    const token = this.authService.getToken();
    return this.http.put('https://recipe-book-angular-f8505.firebaseio.com/recipes.json', this.recipeService.getRecipes(),
      {
        observe: 'body',
        params: new HttpParams().set('auth', token)
      });
  }

  getRecipes() {
    const token = this.authService.getToken();
    return this.http.get('https://recipe-book-angular-f8505.firebaseio.com/recipes.json', {
      observe: 'body',
      responseType: 'json',
      params: new HttpParams().set('auth', token);
    });
  }
}
