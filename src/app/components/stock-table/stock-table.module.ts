import { StockTableComponent } from './stock-table.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    StockTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [
    StockTableComponent
  ]
})
export class StockTableModule { }
