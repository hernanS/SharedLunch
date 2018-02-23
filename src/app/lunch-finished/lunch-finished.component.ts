import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { SessionService } from '../session.service';
import { IUser } from '../user.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lunch-finished',
  templateUrl: './lunch-finished.component.html',
  styleUrls: ['./lunch-finished.component.css']
})
export class LunchFinishedComponent implements OnInit {

  matchedUser;
  option;
  user_info;
  email;
  Image
  constructor(private userService: UserService, private sessionService:SessionService, private router: Router) {
    this.matchedUser = JSON.parse(localStorage.getItem("matched"))
   }

   myform = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl()
  })
  ngOnInit() {
    this.user_info = JSON.parse(localStorage.getItem("session_user"))
  }

  finish_match(){
    this.user_info.currentMatch = null;
		this.user_info.matches.push({
			id: this.matchedUser.id,
			date: Date.now().toString(),
			rate: this.option,
			cancelMessage: null,
			cancelMessageToHHRR: null
		});
		this.userService.update(this.user_info).subscribe((response) => {
      console.log("sss",response )
			this.router.navigate(['/search']);
		});
  }
}
