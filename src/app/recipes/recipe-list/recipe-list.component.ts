import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'this is simply a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT3mEDbLBHhkkqpmhkgwnCTxiIkFp0NrUgCj3TtH5Czj6g3z0n'
    ),
    new Recipe(
      'A test recipe two',
      'this is simply a test',
      'https://cookieandkate.com/images/2017/03/strawberry-salsa-recipe.jpg'
    )
  ];
  constructor() {}

  ngOnInit() {}
}
