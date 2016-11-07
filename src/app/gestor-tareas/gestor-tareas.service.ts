import { GestorTareasModel, Tarea } from './gestor-tareas-model';
import { Injectable } from '@angular/core';
/**
 * Programación reactiva con observables
 */

@Injectable()
export class GestorTareasService {

  private tareas: GestorTareasModel[] = [
    {id: new Date().getMilliseconds(),
     nombre: 'Interfaz de formulario principal',
     diaInicio: new Date('2016-10-02 00:00:00'),
     diaFin: new Date('2016-10-13 00:00:00'),
     prioridad: 4},
    {id: (new Date().getMilliseconds()) + 1,
     nombre: 'Función comparar arrays',
     diaInicio: new Date('2016-10-11 00:00:00'),
     diaFin: new Date('2016-10-14 00:00:00'),
     prioridad: 3},
    {id: (new Date().getMilliseconds()) + 2,
     nombre: 'Sprint de avance del proyecto',
     diaInicio: new Date('2016-10-13 00:00:00'),
     diaFin: new Date('2016-10-13 00:00:00'),
     prioridad: 7},
    {id: (new Date().getMilliseconds()) + 3,
     nombre: 'Hablar con cliente sobre el diseño',
     diaInicio: new Date('2016-10-15 00:00:00'),
     diaFin: new Date('2016-10-20 00:00:00'),
     prioridad: 10},
  ];
  // Comunicación de elemenos mediantes Observable
  // private tareas$: Subject<Tarea[]> = new Subject<Tarea[]>();

  constructor() { }

  getTareas$(): Tarea[] {
    return this.tareas;
  }


}
