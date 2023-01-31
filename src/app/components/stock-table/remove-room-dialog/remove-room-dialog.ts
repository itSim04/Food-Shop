import { Component, Inject } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from "../stock-table.component";

@Component({
    selector: 'remove-room-dialog',
    templateUrl: './remove-room-dialog.html',
})
export class RemoveRoomDialog {

    chosen_id: number = -1;
    constructor (
        public dialogRef: MatDialogRef<RemoveRoomDialog>,
        @Inject(MAT_DIALOG_DATA) public products: any,
    ) {

        console.log(products.products);

    }

    setChosenId(debug: any) {

        this.chosen_id = debug.source.value;

    }

}