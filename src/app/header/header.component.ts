import { RecipeService } from './../recipes/recipe.service';
import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { DataStorageService } from '../shared/data-storage.service';
import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService,
    private recipeService: RecipeService) { }
  onSaveData() {
    this.dataStorageService.storeRecipes().subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

  onFetchData() {
    this.dataStorageService.getRecipes().
      subscribe(
      response => this.modifyRecipe(response)
      );
  }



  modifyRecipe(response: any) {
    const recipes: any = response;
    for (let recipe of recipes) {
      if (!recipe['ingredients']) {
        console.log(recipe);
        recipe['ingredients'] = [];
      }
    }
    this.recipeService.setRecipes(recipes);
  }
}
