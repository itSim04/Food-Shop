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

}
