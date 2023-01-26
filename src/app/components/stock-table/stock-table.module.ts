import { StockTableComponent } from './stock-table.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StockTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatCheckboxModule,
    MatSliderModule,
    FormsModule
  ],
  exports: [
    StockTableComponent
  ]
})
export class StockTableModule { }
