import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DatePickersPage } from './date-pickers.page';
import { CalendarModule } from 'ion2-calendar';


const routes: Routes = [
  {
    path: '',
    component: DatePickersPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    /*
    CalendarModule.forRoot ({
      doneLabel: 'Save',
      closeIcon: true
    })
    */
   CalendarModule
  ],
  declarations: [DatePickersPage]
})
export class DatePickersPageModule {}
