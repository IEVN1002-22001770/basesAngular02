import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './heroes-list.component.html',

})
export class HeroesListComponent {

  heroes:any[]=[
    {
      "imagen":"https://dragonball-api.com/characters/goku_normal.webp",
      nombre:"Goku",
      descripcion:"Kakaroto",
      race:"Saiyan",
      k1:90
    },
    {
      "imagen":"https://dragonball-api.com/characters/vegeta_normal.webp",
      nombre:"Vegeta",
      descripcion:"Principe de los saiyan",
      race:"Saiyan",
      k1:85000
    },
    {
      "imagen":"https://dragonball-api.com/characters/picolo_normal.webp",
      nombre:"Piccolo",
      descripcion:"Z-fighter",
      race:"Nameikan",
      k1:5000
    },
    {
      "imagen":"https://dragonball-api.com/characters/bulma.webp",
      nombre:"Bulma",
      descripcion:"Esposa de Vegeta",
      race:"Humano",
      k1:0
    },
    {
      "imagen":"https://dragonball-api.com/characters/Freezer.webp",
      nombre:"Freezer",
      descripcion:"Army of Frieza",
      race:"Frieza",
      k1:52000
    }
  ]

}
