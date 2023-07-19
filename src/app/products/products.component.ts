import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ConexionService, Users } from '../services/conexion.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  constructor(private conexion: ConexionService){}
  selectedPart: string = 'part2';
  user: Users[][] = [];


  displayedColumns: string[] = ['date', 'orderID', 'product', 'price','status'];
  dataSource = [
   // {date: this.user[0][0], order: this.user[0][1], product: this.user[0][2], price: this.user[0][3], status: this.user[0][4]},
  ];

  data = new MatTableDataSource<any>(this.dataSource);

  changeContent(part: string) {
    this.selectedPart = part;
  }

  ngOnInit(){
    this.listaUsuarios()
    console.log(this.user)
  }

  listaUsuarios() {
    this.conexion.getUsuarios().subscribe(
      (res: any) => {
        for (const usuario of res) {
          this.user = usuario.id;
          this.user = usuario.nick;
          this.user = usuario.name;
          this.user = usuario.rol;
          this.user = usuario.stat;
          console.log(res)

          // Puedes realizar las acciones deseadas con los datos aquí
        }
      },
      (err: any) => {
        console.log(err);
      }
    );
  }


}
