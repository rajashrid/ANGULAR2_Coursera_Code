import { Injectable } from '@angular/core';

import{LEADERS} from '../shared/leaders';
import {Leader} from '../shared/leader';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

 /* getLeaders(){
    return LEADERS;
  }

  getLeader(id){
    return LEADERS.filter((leader) => (leader.id == id))[0];
  }
  getFeaturedLeader(){
      return LEADERS.filter((leader) => (leader.featured))[0];
  } */

  /*
  //Using PROMISE
  getLeaders(): Promise<Leader[]>{
    return Promise.resolve(LEADERS);
  }
  
  getLeader(id : number): Promise<Leader>{
    return Promise.resolve(LEADERS.filter((leader) => (leader.id == id))[0]);
  }

  getFeaturedLEader(): Promise<Leader>{
    return Promise.resolve(LEADERS.filter((leader) => (leader.featured))[0]);
  } */

  //Using OBSERVABLE
  getLeaders():Observable<Leader[]>{
    return Observable.of(LEADERS).delay(2000);
  }

  getLeader(id: number): Observable<Leader>{
    return Observable.of(LEADERS.filter((leader) => (leader.id == id))[0]).delay(2000);
  }

  getFeaturedLeader(): Observable<Leader>{
    return Observable.of(LEADERS.filter((leader)=> (leader.featured))[0]).delay(2000);
  }
}
