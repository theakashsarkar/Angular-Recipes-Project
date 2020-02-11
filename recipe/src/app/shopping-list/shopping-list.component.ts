import { Component, OnInit } from '@angular/core';
import { Ingredinent } from '../shared/ingredinent.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
   ingredinent:Ingredinent[] = [
     new Ingredinent("Apple",10),
     new Ingredinent('tammto',4),
   ];
  constructor() { }

  ngOnInit() {
  }

}
