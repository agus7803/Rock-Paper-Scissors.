import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from './card/card.component';
import { AuthService } from '../core/service/auth.service';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  
})
export class CardModule { }
