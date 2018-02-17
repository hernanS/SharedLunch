import { Component, OnInit, Inject, Optional } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatFormFieldModule} from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-match-found',
  templateUrl: './match-found.component.html',
  styleUrls: ['./match-found.component.css']
})
export class MatchFoundComponent implements OnInit {
  animal: string;
  name: string;
  constructor(public dialog: MatDialog,@Optional() @Inject(MAT_DIALOG_DATA) public data: any) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '1250px',
      data: { name: this.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
  }

}
