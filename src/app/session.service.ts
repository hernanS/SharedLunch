import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {
  session_: {}
  constructor() { }

  init(currentUser){
    this.session_ = currentUser
  }
  get session(){
    return this.session_
  }

}
