import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent  implements OnInit{

  
  //evento cuando se presiona enter
  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  //evento cuando la persona deja de escribir
  @Output() onDebonce:  EventEmitter<string> = new EventEmitter();

  @Input() placeholder:string = '';
  

deboncer:Subject<string> = new Subject();



  termino:string ='';
  buscar(){
      this.onEnter.emit(this.termino);
  }
  constructor() { }

  /*
  No emita el suscribe hasta que el observa deje emitir valores
  despues de 3 milesimas de segundos
  */
  ngOnInit(){
    this.deboncer
    .pipe(
        debounceTime(300)
    ).
    subscribe(valor => {
     this.onDebonce.emit(valor);
    })
}
teclaPresionada(){
  this.deboncer.next(this.termino);
}

 

}
