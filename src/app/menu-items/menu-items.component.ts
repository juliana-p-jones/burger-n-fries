import { Component, OnInit } from '@angular/core';

import { MenuItem } from '/Users/julianajones/Cohort9Java/burgerjawn/src/menu-item';
import { MENUITEMS } from '/Users/julianajones/Cohort9Java/burgerjawn/src/mock-menu-items';
@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
export class MenuItemsComponent implements OnInit {
// menuItems: MenuItem[] = [];
  
menuItems = MENUITEMS;

constructor() { }

  ngOnInit() {
  }


  menuItem: MenuItem = {
    name: 'burger',
    brand: "McDonald's",
    description:'beefy, fresh, and hot',
    price: 10.00,
    featureOfDay: false
  };
}
