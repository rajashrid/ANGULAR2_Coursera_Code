import { Injectable } from '@angular/core';
import {Dish} from '../shared/dish';
import{DISHES} from '../shared/dishes';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

 /* getDishes(): Dish[]{
    return DISHES;
  } 
  
    getDish(id: number): Dish{
    return DISHES.filter((dish) => (dish.id == id))[0];
  }

  getFeaturedDish(): Dish{
    return DISHES.filter((dish) => (dish.featured))[0];
  }
  */


 /*  
      //Using PROMISE
  getDishes(): Promise<Dish[]>{
    //return Promise.resolve(DISHES)

    //Following code to make server fetch delay
    return new Promise(resolve =>{
      setTimeout(() => resolve(DISHES), 2000);
    });
  }

   getDish(id:number): Promise<Dish>{
 //   return Promise.resolve(DISHES.filter((dish) => (dish.id == id))[0]);

     //Following code to make server fetch delay --just a usecase
     return new Promise(resolve =>{
      setTimeout(() => resolve(DISHES.filter((dish) => (dish.id == id))[0]), 2000);
    });
   }

   getFeaturedDish(): Promise<Dish>{
   //  return Promise.resolve(DISHES.filter((dish) => (dish.featured))[0]);

      //Following code to make server fetch delay --just a usecase
      return new Promise(resolve =>{
        setTimeout(() => resolve(DISHES.filter((dish) => (dish.featured))[0]), 2000);
      });
   }

 */


 /*
 //Using OBSERVABLES with code handling PROMISE in component

  getDishes(): Promise<Dish[]>{
    return Observable.of(DISHES).delay(2000).toPromise();
  }
  getDish(id: number): Promise<Dish> {
    return Observable.of(DISHES.filter((dish) => (dish.id === id))[0]).delay(2000).toPromise();
  }

  getFeaturedDish(): Promise<Dish> {
    return Observable.of(DISHES.filter((dish) => dish.featured)[0]).delay(2000).toPromise();
  }  */

  //Using ONLY OBSERVABLES and subscribing it in component
  getDishes(): Observable<Dish[]> {
    return Observable.of(DISHES).delay(2000);
  }

  getDish(id: number): Observable<Dish> {
    return Observable.of(DISHES.filter((dish) => (dish.id === id))[0]).delay(2000);
  }

  getFeaturedDish(): Observable<Dish> {
    return Observable.of(DISHES.filter((dish) => dish.featured)[0]).delay(2000);
  }

  getDishIds(): Observable<number[]> {
    return Observable.of(DISHES.map(dish => dish.id ));
  }
}
