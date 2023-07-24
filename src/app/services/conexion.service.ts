import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  url = '/api'
  constructor(private http: HttpClient) { }

  //get usuarios
  getUsuarios(){
    return this.http.get('http://localhost:3000'+ this.url)
  }

  getUsuario(id: Users){
    return this.http.get('http://localhost:3000'+ this.url + id)
  }

  addUsuario(name: Users){
    return this.http.post('http://localhost:3000'+ this.url, name)
  }

  deleteUsuario(id:Users){
    return this.http.delete('http://localhost:3000'+ this.url+id)
  }

  editUser(id: Users, name: Users){
    return this.http.put('http://localhost:3000'+ this.url + id, name)
  }
}


export interface Users{
  id: String;
  name: String,
  nick: String,
  rol: String,
  stat?: String
}
