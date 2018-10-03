import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is a simple test',
         'https://www.goodfood.com.au/content/dam/images/g/w/y/9/l/0/image.related.wideLandscape.940x529.gwygg4.png/1498698092317.jpg'),
         new Recipe('Another Test Recipe', 'This is a simple test',
         'https://www.goodfood.com.au/content/dam/images/g/w/y/9/l/0/image.related.wideLandscape.940x529.gwygg4.png/1498698092317.jpg')
    ];

    getRecipes(){
        return this.recipes.slice();
    }
}