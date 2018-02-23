import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router} from '@angular/router';
import { SessionService } from '../session.service';
import { DialogComponent } from './../dialog/dialog.component';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  sessionId: number;
  constructor( private UserService: UserService, private router: Router, private SessionService:SessionService, private dialog: MatDialog ) { }
  myform = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl()
  })
  ngOnInit() {
  }

  login(){
    console.log('email' ,this.myform.value.email);
    this.UserService.exist(this.myform.value.email).subscribe(exists => {
      console.log("exists", exists)
      let currentUser = exists.filter(user => {
        return user.email == this.myform.value.email
      })
      if(currentUser.length && currentUser[0].password == this.myform.value.password){
        this.SessionService.init(currentUser);
        localStorage.setItem("session_user", JSON.stringify(currentUser))
        this.router.navigate(['search']);
      }
    })
    
  }
}
