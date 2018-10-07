import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

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

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index:number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}