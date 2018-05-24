import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Person } from './Person';
import { PEOPLE } from './mock-people';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient, private messageService: MessageService) { }
  private personUrl = 'api/people';
  getPeople(): Observable<Person[]> {
    this.messageService.add('Searched People...');
    return this.http.get<Person[]>(this.personUrl);
  }

  private log(message: string) {
    this.messageService.add('PersonService: ' + message);
  }
}
