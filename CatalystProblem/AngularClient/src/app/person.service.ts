import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Person } from './Person';
import { PEOPLE } from './mock-people';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient, private messageService: MessageService) { }
  private personUrl = 'api/people';
  getPeople(searchParam: string): Observable<Person[]> {
    const url = `${this.personUrl}?searchParam=${searchParam}`;

    return this.http.get<Person[]>(url).pipe(
      tap(_ => this.log(`searched for '${searchParam}'`)),
      catchError(this.handleError('getPeople', []))
    );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  private log(message: string) {
    this.messageService.add(message);
  }
}
