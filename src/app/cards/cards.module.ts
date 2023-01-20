import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { CardsComponent } from './cards.component';
import { MatCardModule } from '@angular/material/card';
import { CardModalComponent } from './card-modal/card-modal.component';
import { CardItemComponent } from './card-item/card-item.component';


@NgModule({
  declarations: [
    CardsComponent,
    CardModalComponent,
    CardItemComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    MatCardModule
  ]
})
export class CardsModule { }
