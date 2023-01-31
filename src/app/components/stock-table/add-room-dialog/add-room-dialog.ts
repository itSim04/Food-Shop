import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
    selector: 'add-room-dialog',
    templateUrl: './add-room-dialog.html',
})
export class AddRoomDialog {

    room_name: string = '';
    room_capacity: number = 0;
    constructor () { }
}