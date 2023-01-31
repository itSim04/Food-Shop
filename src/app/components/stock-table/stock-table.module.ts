import { RemoveRoomDialog } from './remove-room-dialog/remove-room-dialog';
import { AddRoomDialog } from './add-room-dialog/add-room-dialog';
import { RoomSectionComponent } from './stock-table.component';

import { MatTableModule } from '@angular/material/table';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RoomSectionComponent,
    AddRoomDialog,
    RemoveRoomDialog
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatCheckboxModule,
    MatSliderModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,

    MatExpansionModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    MatSelectModule,
    MatListModule,
    MatSliderModule,
    MatGridListModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,

  ],
  exports: [
    RoomSectionComponent
  ]
})
export class StockTableModule { }
