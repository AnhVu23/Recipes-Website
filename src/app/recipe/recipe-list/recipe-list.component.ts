import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Lasagna', 'Hot Italian meal!', `https://encrypted-tbn0.gstatic.com/
    images?q=tbn:ANd9GcQIhqkEo-QcQmUTSDyo5RCA0wY8qh7_KoI3Xy52fHxGgJDvL0ew`),
    new Recipe('Lasagna', 'Hot Italian meal!', `https://encrypted-tbn0.gstatic.com/
    images?q=tbn:ANd9GcQIhqkEo-QcQmUTSDyo5RCA0wY8qh7_KoI3Xy52fHxGgJDvL0ew`)
  ];
  constructor() { }

  ngOnInit() {
  }

}
