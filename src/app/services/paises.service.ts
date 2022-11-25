import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private apiPaises: string = 'https://restcountries.com/v3.1/all';
  constructor(private httpClient: HttpClient) { }

  
  getPaises() {
    return this.httpClient.get(this.apiPaises)
  }

  getPais(pais: string) {
    const apiPais: string = `https://restcountries.com/v2/name/${ pais }`;
    return this.httpClient.get(apiPais)
  }
}
