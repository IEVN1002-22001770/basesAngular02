import { Component } from '@angular/core';

@Component({//decoradores
  selector: 'app-root', //alias del componente importante
  templateUrl: './app.component.html', //plantilla base por decirlo asi, definir una ruta
  standalone: false, // si tiene que crear el archivo de modulo
  styleUrl: './app.component.css' //invocar el archivo de estilos
})
export class AppComponent {
  title = 'basesAngular02';

  duplicaNumero(numero:number):number{
    return numero *2;
  }

  pelicula={
    titulo:'batman',
    anio: new Date(),
    precio: 2500
  }

}


