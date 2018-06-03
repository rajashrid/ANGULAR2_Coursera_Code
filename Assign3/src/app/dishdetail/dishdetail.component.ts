import { Component, OnInit } from '@angular/core';

import {Dish} from '../shared/dish';
import { DishService } from '../services/dish.service';
import{ Comment } from '../shared/comment';

import { Params, ActivatedRoute } from '@angular/router';

import { Location } from '@angular/common';

import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css']
})
export class DishdetailComponent implements OnInit {

   dish: Dish;
   dishIds: number[];
  prev: number;
  next: number;

comment: Comment;
commentForm: FormGroup;
ISOdate : string;
formErrors = {
    'author': '',
    'rating': '',
    'comment': ''
  };
   validationMessages  = {
    'author': {
      'required': 'Author name is required',
      'minlength': 'Author name should be of minimum 2 characters',
      'maxlength': 'Author name cannot be more than 25 characters'
    },
    'comment':{
      'required': 'Comments are required',
      'minlength': 'Comment must be of 2 characters',
      'maxlength': 'Comment cannot be more than 125 characters'
    },
  };


  constructor(private dishservice: DishService, 
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder) {
      this.createForm();
     }

  ngOnInit() {
    
   /* 
    //Normal WAy
    let id = +this.route.snapshot.params['id'];
    this.dish = this.dishservice.getDish(id);

    */

   /*
    //Using PROMISE
     let id = +this.route.snapshot.params['id'];
     this.dishservice.getDish(id).then(dish => this.dish = dish);

*/

/*
//Using OBSERVABLE without RXJS
this.dishservice.getDish(id).subscribe(dish => this.dish = dish);
*/

this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds); // -- for navigating forward and backward in dishdetail screen
//Using OBSERVABLE with RXJS


    this.route.params
      .switchMap((params: Params) => this.dishservice.getDish(+params['id']))
      .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); });
  }

  setPrevNext(dishId: number) {      // -- for navigating forward and backward in dishdetail screen
    let index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1)%this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1)%this.dishIds.length];
  }

  createForm(){
    this.commentForm = this.fb.group({
      author:['',[Validators.required,Validators.minLength(2),Validators.maxLength(25)]],
      comment:['',[Validators.required,Validators.minLength(2),Validators.maxLength(125)]],
      rating:['',[Validators.required,Validators.pattern]],
      date:''
    });
    this.commentForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }
  onValueChanged(data?: any){
    if(!this.commentForm){return;}
    const form = this.commentForm;
  
    for(const field in this.formErrors){
      this.formErrors[field] = '';
      const control = form.get(field);
      if(control && control.dirty && !control.valid){
        const message = this.validationMessages[field];
         for(const key in control.errors){
          this.formErrors[field] += message[key] + '';
        }
      }
    }
  }

  onSubmit(){
    this.comment = this.commentForm.value;
    const i = this.dish.comments.length;
    const date = new Date();
    this.comment.date = date.toISOString();
    this.dish.comments.push(this.comment);
   
    this.commentForm.reset({
        author:'',
        comment:'',
        rating: 5,
        date:''
    });
  }

  goBack(): void {
    this.location.back();
  }

}


