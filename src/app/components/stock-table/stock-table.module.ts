import { StockTableComponent } from './stock-table.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    StockTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StockTableComponent
  ]
})
export class StockTableModule { }
