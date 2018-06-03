import { Component, OnInit } from '@angular/core';

import{Leader} from '../shared/leader';

import{LeaderService} from '../services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  Leaders: Leader[];
  constructor( private leaderservice: LeaderService ) { }
 
  ngOnInit() {
  //  this.Leaders = this.leaderservice.getLeaders();

    //Using PROMISE
    this.leaderservice.getLeaders().then(Leaders => this.Leaders = Leaders);
  }


   
  
}
