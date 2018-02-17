import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule,MatDialogModule, MatButtonModule, MatCheckboxModule, MatIconModule, MatFormFieldModule, MAT_DIALOG_DEFAULT_OPTIONS, MatSelectModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { SearchingMatchComponent } from './searching-match/searching-match.component';
import { MatchFoundComponent } from './match-found/match-found.component';
import { DialogComponent } from './dialog/dialog.component';
import { LunchFinishedComponent } from './lunch-finished/lunch-finished.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes, Router} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MemoryUserService } from './memory-user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SearchComponent,
    SearchingMatchComponent,
    MatchFoundComponent,
    DialogComponent,
    LunchFinishedComponent,
    DashboardComponent
  ],
  imports: [
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(MemoryUserService),
    BrowserModule,
    MatInputModule, MatSelectModule,
    MatButtonModule, MatCheckboxModule, MatIconModule,MatFormFieldModule, MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  exports: [MatButtonModule, MatCheckboxModule],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
  entryComponents: [
    DialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
