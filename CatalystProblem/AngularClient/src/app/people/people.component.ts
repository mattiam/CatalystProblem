import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../Person';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people: Person[];
  searchParam: string;
  constructor(private personService: PersonService) {
  }
  getPeople(): void {
    this.personService.getPeople(this.searchParam)
      .subscribe(people => this.people = people);
  }

  ngOnInit() {
    this.getPeople();
  }
}
