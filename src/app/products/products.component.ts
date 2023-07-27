import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ConexionService, Users } from '../services/conexion.service';
import { ColorToggleService } from '../services/color-toggle.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  constructor(private conexion: ConexionService, public colorToggleService: ColorToggleService){}
  selectedPart: string = 'part1';
  displayedColumns: string[] = ['date', 'orderID', 'product', 'price','status'];
  dataSource = [
    {date: "", order: "", product: "", price: "", status: ""},
  ];
  data: any

  changeContent(part: string) {
    this.selectedPart = part;
  }

  ngOnInit(){
    this.listaUsuarios()
  }

  listaUsuarios() {
    this.conexion.getUsuarios().subscribe(
      (res: any) => {
        // Crear un arreglo para almacenar los usuarios
        const usuarios = [];

        for (const usuario of res) {

          // Agregar el usuario al arreglo de usuarios
          usuarios.push({ date: usuario.id, order: usuario.nick, product: usuario.name, price: usuario.rol, status: usuario.stat });
        }

        // Asignar el arreglo completo de usuarios a this.dataSource
        this.dataSource = usuarios;

        // Crear la instancia de MatTableDataSource con el arreglo de usuarios
        this.data = new MatTableDataSource<any>(this.dataSource);

      },
      (err: any) => {
        console.log(err);
      }
    );
  }



}
