import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ColorToggleService } from '../services/color-toggle.service';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css'],
})
export class SalesReportComponent {
  displayedColumns: string[] = [
    'date',
    'orderID',
    'customer',
    'product',
    'price',
    'status',
  ];
  dataSource = [
    {
      date: '15/07/23',
      order: 'RZ17308',
      customer:'x',
      product: 'Starter',
      price: '$250 USD',
      status: 'N',
    },
    { date: 2, order: 'Helium', customer:'', product: 4.0026, price: 'He', status: 'N' },
    { date: 3, order: 'Lithium', customer:'',product: 6.941, price: 'Li', status: 'N' },
    { date: 4, order: 'Beryllium', customer:'',product: 9.0122, price: 'Be', status: 'N' },
    { date: 5, order: 'Boron', customer:'',product: 10.811, price: 'B', status: 'N' },
    { date: 6, order: 'Carbon', customer:'',product: 12.0107, price: 'C', status: 'N' },
    { date: 7, order: 'Nitrogen', customer:'',product: 14.0067, price: 'N', status: 'N' },
    { date: 8, order: 'Oxygen', customer:'',product: 15.9994, price: 'O', status: 'N' },
    { date: 9, order: 'Fluorine', customer:'',product: 18.9984, price: 'F', status: 'N' },
    { date: 10, order: 'Neon', customer:'',product: 20.1797, price: 'Ne', status: 'N' },
  ];

  data = new MatTableDataSource<any>(this.dataSource);
  constructor(public colorToggleService: ColorToggleService) { }
}
