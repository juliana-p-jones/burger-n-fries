import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { MenuItem } from '/Users/julianajones/Cohort9Java/burgerjawn/src/menu-item';

@Injectable({
    providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const menuItems = [
            {
            
                name: 'burger',
                brand: "McDonald's",
                description: 'Beefy, fresh, and hot',
                price: 50.00,
                featureOfDay: false
            },
            {

                name: 'fries',
                description: "Oily, salty and hot",
                price: 10.00,
                featureOfDay: false
            },
            {
                
                name: 'soda',
                description: 'Sweeter than water',
                price: 30.00,
                featureOfDay: false
            }
        ];
        return { menuItems };
    }
}