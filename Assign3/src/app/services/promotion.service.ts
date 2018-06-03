import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

@Injectable()
export class PromotionService {

  constructor() { }

  /*
  getPromotions(): Promotion[] {
    return PROMOTIONS;
  }

  getPromotion(id: number): Promotion {
    return PROMOTIONS.filter((promo) => (promo.id === id))[0];
  }

  getFeaturedPromotion(): Promotion {
    return PROMOTIONS.filter((promotion) => promotion.featured)[0];
  }
  */

 /* 
  //Using PROMISE
  getPromotions(): Promise<Promotion[]>{
    return Promise.resolve(PROMOTIONS);
  }

   getPromotion(id: number): Promise<Promotion>{
     return Promise.resolve(PROMOTIONS.filter((promo) => (promo.id === id))[0]);
   }

   getFeaturedPromotion():Promise<Promotion>{
     return Promise.resolve(PROMOTIONS.filter((promotion) => promotion.featured)[0]);
   } */

   //Using OBSERVABLE

  getPromotions(): Observable<Promotion[]>{
    return Observable.of(PROMOTIONS);
  }

   getPromotion(id: number): Observable<Promotion>{
     return Observable.of(PROMOTIONS.filter((promo) => (promo.id === id))[0]);
   }

   getFeaturedPromotion():Observable<Promotion>{
     return Observable.of(PROMOTIONS.filter((promotion) => promotion.featured)[0]);
   }
}