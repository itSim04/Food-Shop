import { Component, Inject } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'login-user-dialog',
    templateUrl: './login-user-dialog.html',
})
export class LoginUserDialog {

    chosen_id: number = -1;
    constructor (
        public dialogRef: MatDialogRef<LoginUserDialog>,
        @Inject(MAT_DIALOG_DATA) public users: any,
    ) {}

    setChosenId(debug: any) {

        this.chosen_id = debug.source.value;

    }

}