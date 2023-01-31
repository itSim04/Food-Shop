import { LoginUserDialog } from './login-user-dialog/login-user-dialog';
import { MatButtonModule } from '@angular/material/button';
import { UserSectionComponent } from './user-section.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';



@NgModule({
  declarations: [
    UserSectionComponent,
    LoginUserDialog
  ],
  imports: [
    CommonModule,
    MatButtonModule,

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
    UserSectionComponent
  ]
})
export class UserSectionModule { }
