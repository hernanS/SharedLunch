import { Component, OnInit, Optional, Inject, Input } from '@angular/core';

import { SessionService } from '../session.service';
import { UserService } from '../user.service';
import { IUser } from './../user.interface';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  user_info;
  email;
  name;
  matchedUser: IUser;
 
  constructor(private userService: UserService, private sessionService:SessionService,
    public dialog: MatDialog,@Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {  }

  ngOnInit() {
    this.user_info = JSON.parse(localStorage.getItem("session_user"))
    this.status = !this.user_info.available
  }

  status;
  
  openDialog(): void {
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '1250px',
      data: { }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.user_info.matches.push(
      {
        id: this.user_info.currentMatch,
        date: new Date().toString(),
        rate: null,
        cancelMessage: result.messagge,
        cancelMessageToHHRR: result.messagge2
      }
      );
      this.user_info.currentMatch = null;
      let matchedUser = JSON.parse(localStorage.getItem("matched"))
      this.userService.update(this.user_info).subscribe((x) => {
        matchedUser.currentMatch = null;
        this.userService.update(matchedUser).subscribe(() => {
        console.log("bbbb")
        });
      });
    });
  }

  changeStatus(){    
    this.user_info.available = !this.user_info.available;
    this.status = !this.user_info.available;
    console.log(this.user_info)
    this.userService.update(this.user_info)
  }
  getMatchRandom(validation){
	  return validation[Math.floor(Math.random() * validation.length)];
  }
  getMatch(){
    console.log("666666666", this.user_info)
		this.userService.getData().subscribe((data) => {
      let validation = data.filter((user) => 
        user.available && user.id !== this.user_info.id && user.currentMatch === null
			);
			this.matchedUser = this.getMatchRandom(validation)
      localStorage.setItem("matched",JSON.stringify(this.matchedUser)  )
			this.user_info.currentMatch = this.matchedUser.id;
			this.matchedUser.currentMatch = this.user_info.id;
			this.userService.update(this.user_info).subscribe(() => {
				this.userService.update(this.matchedUser).subscribe(() => {
				});
			});
		});
	}
}
