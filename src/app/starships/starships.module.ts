import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarshipsComponent } from './starships.component';
import { InfoComponent } from './info/info.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [StarshipsComponent, InfoComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    StarshipsComponent,
    InfoComponent
  ]
})
export class StarshipsModule { }
