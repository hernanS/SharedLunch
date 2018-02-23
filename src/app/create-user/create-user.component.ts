import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private http: HttpClient, private UserService: UserService, private router: Router) { }
  validation: string;
  myform = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl()
  })

  ngOnInit() {
  }

  save(){
      this.UserService.exist(this.myform.value.email).subscribe(user => {
        let currentUser = user.filter(user => {
          return user.email == this.myform.value.email
        })

        console.log("nanchuma", currentUser)
        if(currentUser.length){
          console.log("The user is already use" )
        }else{
            // const objUser = {
            //   available: false,
            //   firstName: 'Marcela',
            //   lastName: 'Ramirez',
            //   area: 'Developer',
            //   phone: '3158324055',
            //   interests: ['Movies', 'Food'],
            //   description: 'Front-End developer',
            //   location: 2,
            //   email: email,
            //   password: password,
            //   matches:[]
            // }
            this.UserService.saveUser(this.myform.value.email, this.myform.value.password).subscribe(new_user =>
            { 
              console.log("new_usere",new_user )
              localStorage.setItem("session_user", JSON.stringify(new_user))
              this.router.navigate(['search']);
            }
          )
        }
      })
  }
}
