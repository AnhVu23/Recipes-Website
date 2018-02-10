import { RecipeService } from '../../recipes/recipe.service';
import {Component, OnInit} from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as fromAuth from '../../auth/store/auth.reducer';
import * as AuthActions from '../../auth/store/auth.action';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit{
  authState: Observable<fromAuth.State>;

  ngOnInit(): void {
    this.authState = this.store.select('auth');
  }
  constructor(private dataStorageService: DataStorageService,
              private recipeService: RecipeService,
              private store: Store<fromApp.AppState>) { }
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
    this.store.dispatch(new AuthActions.Logout());
  }
}
