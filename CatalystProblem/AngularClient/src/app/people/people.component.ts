import { Component, OnInit } from '@angular/core';
import { PEOPLE } from '../mock-people';
import { Person } from '../Person';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people: Person[] = PEOPLE;
  constructor() {
  }

  ngOnInit() {
  }
}
