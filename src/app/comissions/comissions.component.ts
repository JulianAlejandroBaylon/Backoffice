import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-comissions',
  templateUrl: './comissions.component.html',
  styleUrls: ['./comissions.component.css'],
})
export class ComissionsComponent {
  displayedColumns: string[] = [
    'date',
    'orderID',
    'product',
    'price',
  ];
  dataSource = [
    {
      date: '15/07/23',
      amount: 'RZ17308',
      desc: 'Starter',
      details: '$250 USD',
    },
    { date: 2, amount: 'Helium', desc: 4.0026, details: 'He' },
    { date: 3, amount: 'Lithium', desc: 6.941, details: 'Li' },
    { date: 4, amount: 'Beryllium', desc: 9.0122, details: 'Be' },
    { date: 5, amount: 'Boron', desc: 10.811, details: 'B' },
    { date: 6, amount: 'Carbon', desc: 12.0107, details: 'C' },
    { date: 7, amount: 'Nitrogen', desc: 14.0067, details: 'N' },
    { date: 8, amount: 'Oxygen', desc: 15.9994, details: 'O' },
    { date: 9, amount: 'Fluorine', desc: 18.9984, details: 'F' },
    { date: 10, amount: 'Neon', desc: 20.1797, details: 'Ne' },
  ];

  data = new MatTableDataSource<any>(this.dataSource);
}
