import { Component } from '@angular/core';
import { Pais } from '../../interfaces/paises.interfaces';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino:string = '';
  hayError:boolean = false;
  paises: Pais[] = [];
  paisesSugeridos: Pais[] = [];
  mostrarSugerencias:boolean = false;


  buscar( termino:string){

    this.hayError = false;
    this.termino = termino;
    
    console.log(this.termino);
    this.paisesService.buscarPais(this.termino)
    .subscribe(paises => {
      this.paises = paises;
      console.log(this.paises);

    }, (err) =>{
      this.hayError = true;
      this.paises =[];
    }
    
    );

  }

  sugerencias(termino:string){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    this.paisesService.buscarPais(termino)
      .subscribe(
        paises => 
          this.paisesSugeridos = paises.splice(0,5),
          (err) => this.paisesSugeridos = []
        )
  }


buscarSugerido(termino:string){
  this.buscar(termino);
  this.mostrarSugerencias = false;
}

  constructor(private paisesService : PaisesService) { 

  }

}
