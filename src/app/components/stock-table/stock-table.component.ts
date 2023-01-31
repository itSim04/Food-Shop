import { Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddRoomDialog } from './add-room-dialog/add-room-dialog';
import { RemoveRoomDialog } from './remove-room-dialog/remove-room-dialog';


export interface Product {

  name: string,
  price: number,
  availability: boolean;

}

@Component({
  selector: 'app-stock-table',
  templateUrl: './stock-table.component.html',
  styleUrls: ['./stock-table.component.scss']
})
export class RoomSectionComponent {

  show_out_of_stock: boolean = true;
  price_slider: number = this.getMax();
  products: Product[] = [

    {
      availability: true,
      name: 'Apple',
      price: 2
    },
    {
      availability: false,
      name: 'Banana',
      price: 1
    },
    {
      availability: true,
      name: 'Orange',
      price: 9
    },
    {
      availability: true,
      name: 'Mango',
      price: 12
    },
    {
      availability: true,
      name: 'Elite',
      price: 0
    },
    {
      availability: false,
      name: 'Tomato',
      price: 5
    }

  ];

  constructor (public dialog: MatDialog, public router: Router) { }


  openAddRoom(): void {
    const dialogRef = this.dialog.open(AddRoomDialog);

    dialogRef.afterClosed().subscribe(result => {

      if (result) {
        this.products.push(result);
        this.price_slider = this.getMax();
      }
    });
  }

  openRemoveRoom(): void {
    const dialogRef = this.dialog.open(RemoveRoomDialog, {

      data: { products: this.products }
    });

    dialogRef.afterClosed().subscribe(result => {

      console.log("This closed with: " + result);
      this.products.splice(result, 1);
      this.price_slider = this.getMax();

    });
  }

  goToUsers() {

    this.router.navigate(['/users']);

  }


  getMax() {

    if (this.products) {
      return Math.max(...this.products.map(t => t.price));

    } else {

      return 0;

    }

  }

}
