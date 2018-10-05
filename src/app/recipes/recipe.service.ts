import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is a simple test',
         'https://www.goodfood.com.au/content/dam/images/g/w/y/9/l/0/image.related.wideLandscape.940x529.gwygg4.png/1498698092317.jpg',
         [
             new Ingredient('Meat', 1),
             new Ingredient('French Fries', 20)
         ]),
         new Recipe('Another Test Recipe', 'This is a simple test',
         'https://www.goodfood.com.au/content/dam/images/g/w/y/9/l/0/image.related.wideLandscape.940x529.gwygg4.png/1498698092317.jpg',
         [  
             new Ingredient('Tomatoes', 2),
             new Ingredient('Potatoes', 3)
         ])
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}