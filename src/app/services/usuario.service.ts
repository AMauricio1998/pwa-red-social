import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url: string  = `http://localhost:1998/api/usuarios`;
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'}); 

  constructor(
    private httpClient: HttpClient
  ) { }

  getUsuarios() {
    return this.httpClient.get(this.url)
  }

  public addUser(user: any) {
    return this.httpClient.post(this.url, user, {headers: this.httpHeaders});
  }
}
