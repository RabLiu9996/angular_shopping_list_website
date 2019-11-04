import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  private ingredients: Ingredient[] = [
    new Ingredient("Apple", 1, "piece"),
    new Ingredient("Shrimp", 1, "LB")
  ];

  constructor() { }

  ngOnInit() {
  }

}
