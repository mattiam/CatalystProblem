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
  searching: boolean;
  constructor(private personService: PersonService) {
  }
  getPeople(): void {
    this.people = [];
    this.searching = true;
    this.personService.getPeople(this.searchParam)
      .subscribe(
        people => this.people = people,
        error => console.log('Error: ', error),
        () => this.searching = false
      );
  }

  ngOnInit() {
    this.searchParam = '';
    this.people = [];
    this.searching = false;
    this.getPeople();
  }
}
