import { Component } from '@angular/core';
import { Pais } from '../../interfaces/paises.interfaces';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {

  regiones:string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva:string = '';
  hayError:boolean = false;
  paises: Pais[] = [];

  getClaseCSS(region:string):string{
      return (region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary';
  }
  activarRegion(region:string){

    if(region === this.regionActiva){
      return;
    }
    this.regionActiva = region;
    this.hayError = false;
    this.paises =[];

    
 
    this.paisesService.buscarPorRegion(region)
    .subscribe(paises => {
      this.paises = paises;
    }
    );
    
  }


  constructor(private paisesService : PaisesService) { }
  

}
