import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
  new Recipe('A Test Recipe', 'This is simply a Test', 'https://payload.cargocollective.com/1/9/290469/5930422/recipe-logo-1.jpg'),
  new Recipe('A Test Recipe', 'This is simply a Test', 'https://payload.cargocollective.com/1/9/290469/5930422/recipe-logo-1.jpg')];
  constructor() { }

  ngOnInit() {
  }

}
