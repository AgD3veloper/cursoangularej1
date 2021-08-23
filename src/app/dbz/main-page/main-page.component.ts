import { Component, OnInit } from '@angular/core';

interface personaje {
  nombre?:string,
    poder?:number
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent  {
// personajes:personaje =[{}] ;

  nuevo:personaje = {nombre:'gerrero 1', poder:560};

  agregar(){
 }


}
