import { Component, OnInit } from '@angular/core';
import { USERS } from './users-mock';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})


export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  users = USERS;
}
