import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Shrimp', 'https://cdn.pixabay.com/photo/2017/06/17/14/33/shrimp-2412421_960_720.jpg'),
    new Recipe('Test Recipe', 'Shrimp', 'https://cdn.pixabay.com/photo/2017/06/17/14/33/shrimp-2412421_960_720.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
