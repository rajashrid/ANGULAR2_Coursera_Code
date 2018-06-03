import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import{Leader} from '../shared/leader';

import { PromotionService } from '../services/promotion.service';
import{LeaderService} from '../services/leader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leader: Leader;
  constructor(private dishservice: DishService,
    private promotionservice: PromotionService,
  private leaderservice: LeaderService) { }

  ngOnInit() {
   /* 
    this.dish = this.dishservice.getFeaturedDish();
    this.promotion = this.promotionservice.getFeaturedPromotion();
    this.leader = this.leaderservice.getFeaturedLeader();
  */

/*
  //Using PROMISE
  this.dishservice.getFeaturedDish().then(dish => this.dish= dish);
  this.promotionservice.getFeaturedPromotion().then(promotion => this.promotion = promotion);
  this.leaderservice.getFeaturedLEader().then(leader => this.leader= leader);
  */

  //Using OBSERVABLE
  this.dishservice.getFeaturedDish().subscribe(dish => this.dish= dish);
  this.promotionservice.getFeaturedPromotion().subscribe(promotion => this.promotion = promotion);
  this.leaderservice.getFeaturedLeader().subscribe(leader => this.leader= leader);

  }

}