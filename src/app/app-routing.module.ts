import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router, RouterLink} from '@angular/router';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchingMatchComponent } from './searching-match/searching-match.component';
import { LunchFinishedComponent } from './lunch-finished/lunch-finished.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { CreateUserComponent } from './create-user/create-user.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'dashboard', component: DashboardComponent},
  { path: 'user', component: UserComponent },
  { path: 'createuser', component: CreateUserComponent },
  { path: 'search', component: SearchComponent },
  { path: 'searching', component: SearchingMatchComponent },
  { path: 'lunchfinished', component: LunchFinishedComponent },
  { path: 'app', component: AppComponent }
];
export const AppRoutingModule =  RouterModule.forRoot(routes);
