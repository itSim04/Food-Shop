import { Component } from '@angular/core';

interface Product {

  name: string,
  price: number,
  availability: boolean;

}

@Component({
  selector: 'app-stock-table',
  templateUrl: './stock-table.component.html',
  styleUrls: ['./stock-table.component.scss']
})
export class StockTableComponent {

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
    }

  ];

}
