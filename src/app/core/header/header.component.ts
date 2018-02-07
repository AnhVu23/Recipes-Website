import { RecipeService } from '../../recipes/recipe.service';
import { Component } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService,
              private recipeService: RecipeService,
              private authService: AuthService) { }
  onSaveData() {
    this.dataStorageService.storeRecipes().subscribe(
      response => {
        console.log(response);
      }
    );
  }

  onFetchData() {
    this.dataStorageService.getRecipes()
      .subscribe(
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

  onLogout() {
    this.authService.logout();
  }
}
