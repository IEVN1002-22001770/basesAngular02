import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.component.html',
  styleUrl: './operas-bas.component.css'
})
export class OperasBasComponent {
  num1:string=""
  num2:string=""
  operacion:string=""
  res:string=""

  Calcular():void{
    switch(this.operacion){
      case 'sumar':
      this.res=(parseInt(this.num1)+parseInt(this.num2)).toString();
      break;
      case 'restar':
      this.res=(parseInt(this.num1)-parseInt(this.num2)).toString();
      break;
      case 'multi':
      this.res=(parseInt(this.num1)*parseInt(this.num2)).toString();
      break;
      case 'divi':
      this.res=(parseInt(this.num1)/parseInt(this.num2)).toString();
      break;
    }

  }

}
