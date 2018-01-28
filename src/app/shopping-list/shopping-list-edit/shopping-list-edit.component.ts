import { Component, OnInit, ViewChild, ElementRef,Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  constructor(private slService: ShoppingListService) {}

  ngOnInit() {
  }

  onAddedIngredient() {
    const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value,
    this.amountInputRef.nativeElement.value);
    this.slService.addIngredient(newIngredient);
  }
}
