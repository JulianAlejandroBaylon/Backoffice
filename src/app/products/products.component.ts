import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  selectedPart: string = 'part1';
  

  displayedColumns: string[] = ['date', 'orderID', 'product', 'price','status'];
  dataSource = [
    {date: '15/07/23', order: 'RZ17308', product: 'Starter', price: '$250 USD', status: 'N'},
    {date: 2, order: 'Helium', product: 4.0026, price: 'He',status: 'N'},
    {date: 3, order: 'Lithium', product: 6.941, price: 'Li',status: 'N'},
    {date: 4, order: 'Beryllium', product: 9.0122, price: 'Be',status: 'N'},
    {date: 5, order: 'Boron', product: 10.811, price: 'B',status: 'N'},
    {date: 6, order: 'Carbon', product: 12.0107, price: 'C',status: 'N'},
    {date: 7, order: 'Nitrogen', product: 14.0067, price: 'N',status: 'N'},
    {date: 8, order: 'Oxygen', product: 15.9994, price: 'O',status: 'N'},
    {date: 9, order: 'Fluorine', product: 18.9984, price: 'F',status: 'N'},
    {date: 10, order: 'Neon', product: 20.1797, price: 'Ne',status: 'N'},
  ];

  data = new MatTableDataSource<any>(this.dataSource);

  changeContent(part: string) {
    this.selectedPart = part;
  }
}
