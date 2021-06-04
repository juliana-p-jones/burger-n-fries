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
    featureOfDay: false,
    qty: 0,
    "image": 'https://i.pinimg.com/originals/47/2d/c3/472dc3346c5d2746cac2db4d95cc1e22.png',
  };

  public num1!: number;
  public num2!: number;
  public num3!: number;
 
//decrememnt cart
decreaseQty(menuItems: any){
  //if any qty is less than 0 
 menuItems.qty--;
 if(menuItems.qty <0){
  menuItems.qty = 0;
 }
}
  
incrementQty(menuItems: any){
  menuItems.qty++
  if(menuItems.qty <0){
    menuItems.qty = 0;
  }
}

//calculate total
calcTotal(){
let sum = 0;
for(const item of this.menuItems){
  sum += item.price*item.qty;
}
return sum;
}
totalQty(){
  let total = 0;
  for(const amount of this.menuItems){
    total += amount.qty;
  }
  return total;
 };
}
