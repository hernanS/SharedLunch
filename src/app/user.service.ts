import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from './user.interface';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { takeWhile } from 'rxjs/operator/takeWhile';
@Injectable()
export class UserService {
  constructor(private  http: HttpClient) { 
  }

  getMatch(idMatched){
    return this.http.get<IUser[]>(`api/users/?email=${idMatched}`);
  }

  getData(){
    return this.http.get<IUser[]>('api/users');
  }

  exist(email) : Observable<any> {
    return this.http.get(`api/users/?email=${email}`)
  }

  update(user) : Observable<IUser> {
    return this.http.put <IUser>("api/users/" + user.id, user)
  }

  saveUser(email, password) : any {
    return this.http.post("api/users", {
        available: false,
        firstName: 'Marcela',
        lastName: 'Ramirez',
        area: 'Developer',
        phone: '3158324055',
        interests: ['Movies', 'Food'],
        description: 'Front-End developer',
        location: 2,
        email: email,
        password: password,
        matches:[]
      })
}
}
