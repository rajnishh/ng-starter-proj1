import { Recipe } from '../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  abc: string = "Hello Bhai";
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simple recipe', 'https://cdn5.norecipes.com/wp-content/uploads/2018/02/02071116/mapo-tofu-recipe-011.jpg'),
    new Recipe('Second Recipe', 'This is a simple recipe 2', 'http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?')
  ];

  constructor() { }

  ngOnInit() {
  }

}
