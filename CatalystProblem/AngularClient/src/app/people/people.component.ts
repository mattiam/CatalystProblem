import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../Person';
import { Observable, timer, interval, Subject, Subscription  } from 'rxjs';
import { takeUntil, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people: Person[];
  searchParam: string;
  searching: boolean;
  searchTime: number;
  timerSubscription: Subscription;
  constructor(private personService: PersonService) {
  }
  getPeople(): void {
    this.people = [];
    this.searching = true;


    const subscription = this.personService.getPeople(this.searchParam)
      .subscribe(
        people => this.populatePeople(people),
        error => console.log('Error: ', error),
        () => this.finishedPopulatingPeople()
      );

      const source = interval(1000);
      this.timerSubscription = source.subscribe(t => this.searchTime = t);
  }

  populatePeople(people: Person[]): void {
    this.people = people;
  }

  finishedPopulatingPeople(): void {
    this.searching = false;
    this.searchTime = 0;
    this.timerSubscription.unsubscribe();
  }

  ngOnInit() {
    this.searchParam = '';
    this.people = [];
    this.searching = false;
    this.searchTime = 0;
    this.getPeople();
  }
}
