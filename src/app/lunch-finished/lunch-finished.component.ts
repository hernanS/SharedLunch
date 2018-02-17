import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lunch-finished',
  templateUrl: './lunch-finished.component.html',
  styleUrls: ['./lunch-finished.component.css']
})
export class LunchFinishedComponent implements OnInit {
  experiences = [
    {value: 'Good-0', viewValue: 'good'},
    {value: 'Meh-1', viewValue: 'meh'},
    {value: 'Not-so-great-2', viewValue: 'not-so-great'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
