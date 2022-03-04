import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Pais } from '../../interfaces/paises.interfaces';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {


  pais!:Pais;
  
  constructor(
    private rutaActiva:ActivatedRoute,
    private paisesService:PaisesService
    ) {

     }

  ngOnInit(): void {

    this.rutaActiva.params
      .pipe(
          switchMap(({codigoPais}) => this.paisesService.obtenerPorCodigo(codigoPais))
          ,tap(console.log)
          ).subscribe(
            pais => {
              this.pais = pais[0];
            }
      );
    // this.rutaActiva.params.
    // subscribe(
    //   ({codigoPais}) =>{
    //     console.log(codigoPais);
    //   this.paisesService.obtenerPorCodigo(codigoPais).subscribe
    //   (
    //     pais => {
    //       console.log(pais);
    //     }
    //   )
    // });

  }

}
