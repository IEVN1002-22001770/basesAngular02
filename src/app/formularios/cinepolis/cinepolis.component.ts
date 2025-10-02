import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.component.html',
  styleUrl: './cinepolis.component.css'
})


export class CinepolisComponent {
  nombre:string='';
  comprador:string='';
  boleto:string='';
  tarjeta:string='no';
  total:number=0;
  subtotal:number=0;
  descuento:number=0;
  mensaje:string='';


  procesar():void{
    const compradores=parseInt(this.comprador);
    const boletos=parseInt(this.boleto);

    if(boletos > compradores * 7){
      this.total = 0;
      return;
    }

    if(boletos > 5){
      this.descuento = 0.15;
    }
    else if (boletos >= 3){
      this.descuento = 0.10;
    } else {
      this.descuento = 0;
    }

    this.subtotal = 12 * boletos;

    this.subtotal = this.subtotal - (this.subtotal * this.descuento);


    if (this.tarjeta==='si') {
      this.subtotal = this.subtotal - (this.subtotal * 0.10);
    }

    this.total = this.subtotal;

    this.mensaje = `${this.nombre}, el total es: ${this.subtotal}`;
  }

}






