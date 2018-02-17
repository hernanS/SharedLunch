import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shared Lunch';
  rootPage: string = 'UserComponent';
  pages: Array<{ title: string, component: any, icon: string}>;
  
  constructor(){
    this.pages = [
      { title: 'Login', component: 'LoginPage', icon: "home" },
      { title: 'test', component: 'TestPage', icon: "test" }
    ];
  } 

  openPage(page){
    console.log("this is page app components", page);

  }
}
