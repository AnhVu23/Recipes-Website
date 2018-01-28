import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';

@Injectable()
export class RecipeService {
   recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Lasagna', 'Hot Italian meal!', `https://encrypted-tbn0.gstatic.com/
    images?q=tbn:ANd9GcQIhqkEo-QcQmUTSDyo5RCA0wY8qh7_KoI3Xy52fHxGgJDvL0ew`),
    new Recipe('Other Lasagna', 'Hot Italian meal!', `https://encrypted-tbn0.gstatic.com/
    images?q=tbn:ANd9GcQIhqkEo-QcQmUTSDyo5RCA0wY8qh7_KoI3Xy52fHxGgJDvL0ew`)
  ];
  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }

}
