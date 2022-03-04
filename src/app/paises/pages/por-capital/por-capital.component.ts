import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/paises.interfaces';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  termino:string = '';
  hayError:boolean = false;
  paises: Pais[] = [];

  buscar( termino:string){

    this.hayError = false;
    this.termino = termino;
    
    console.log(this.termino);
    this.paisesService.buscarPorCapital(this.termino)
    .subscribe(paises => {
      this.paises = paises;
      console.log(this.paises);

    }, (err) =>{
      this.hayError = true;
      this.paises =[];
    }
    
    );

  }

  constructor(private paisesService : PaisesService) { }

  ngOnInit(): void {
  }
  sugerencias(termino:string){
    this.hayError = false;
  }
}
