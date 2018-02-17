import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  sessionId: number;
  constructor() { }
  myform = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl()
  })
  ngOnInit() {
  }

  save(){
    console.log('email' ,this.myform.value.email);

  }

  login(){
    console.log('email' ,this.myform.value.email);
    this.sessionId = 1;
  }
}
