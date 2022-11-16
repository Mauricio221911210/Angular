import { Injectable } from '@angular/core';
import { Materia } from '../interfaces/Materia';

@Injectable({
  providedIn: 'root'
})
export class MateriasService {
  
  constructor() { }
  private materias:Materia[]=[{
    cuatrimestre: 1,
    materias:"Animal Porcino de 12 Kg saludable apenas vacunado",
    fecha: "2021-01-01",
    imagen: "assets/images/puerco1.png"
  },
  {
    cuatrimestre: 2,
    materias:"Lechones de 2 meses de nacimiento vacunados recientemente ",
    fecha: "2021-09-01",
    imagen: "assets/images/puercos.png"
  },
  {
    cuatrimestre: 3,
    materias:" Gallinas Ponedoras ",
    fecha: "2021-09-01",
    imagen: "assets/images/gallinas.png"
  },
  {
    cuatrimestre: 4,
    materias:"Oveja de 1 año lista para matar  ",
    fecha: "2021-09-01",
    imagen: "assets/images/oveja.png"
  }];

  getMaterias():Materia[]{
    return this.materias;
  }


}
