import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Pais } from '../interfaces/paises.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http:HttpClient) { }



  //parametros url
  get httpParams (){
    return new HttpParams()
    .set('fields','name,flags,cca2,population,capital');
  }

  //Retorna mas de un pais []
  buscarPais(termino:string):Observable<Pais[]>{
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Pais[]>(url,{params:this.httpParams});
  }

  buscarPorCapital(termino:string):Observable<Pais[]>{
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Pais[]>(url,{params:this.httpParams});
  }

  obtenerPorCodigo(termino:string):Observable<Pais[]>{
    const url = `${this.apiUrl}/alpha/${termino}`;
    return this.http.get<Pais[]>(url);
  }

  buscarPorRegion(region:string):Observable<Pais[]>{

    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Pais[]>(url,{params:this.httpParams})
      .pipe(
        tap(
          console.log
        )
      );
      
    
  }

  



}
