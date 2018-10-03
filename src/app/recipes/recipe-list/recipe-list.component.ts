import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  @Output() recipeWasSelected = new EventEmitter<Recipe>();  
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simple test',
     'https://www.goodfood.com.au/content/dam/images/g/w/y/9/l/0/image.related.wideLandscape.940x529.gwygg4.png/1498698092317.jpg'),
     new Recipe('Another Test Recipe', 'This is a simple test',
     'https://www.goodfood.com.au/content/dam/images/g/w/y/9/l/0/image.related.wideLandscape.940x529.gwygg4.png/1498698092317.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
