import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://reqres.in/api';

  constructor( private http: HttpClient ) { }


  getUsers(): Observable<any> {
    return this.http.get<any>(`${ this.url }/users?per_page=6`)
          .pipe(
            delay(2000),
            map( resp => resp['data'])
          );
  }

  getUserById(id: string): Observable<any> {
    return this.http.get<any>(`${ this.url }/users/${ id }`)
          .pipe(
            delay(2000),
            map( resp => resp['data'])
          );
  }
}
