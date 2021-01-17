import { Component } from '@angular/core';
// import from '../../node_modules/zone.js/dist/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba';
  documentoProtegido: string;

  protegerDocumento(value){
    console.log(`Entro en protegerDocumento1`);
    console.log(value);
    this.documentoProtegido = `modificado - ${value}`;
    return this.documentoProtegido;
  }

  enviar(documento, nombre, documentoOculto){
    console.log(`Entro en enviar`);
    console.log(`documento - ${documento}`);
    console.log(`nombre - ${nombre}`);
    console.log(`documentoOculto - ${documentoOculto}`);
  }
}
