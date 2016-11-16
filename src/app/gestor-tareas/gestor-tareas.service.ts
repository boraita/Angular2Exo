import { GestorTareasModel, Tarea } from './gestor-tareas-model';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

// Importar la clase Observable de la librería Reactive Extensions
import { Observable }     from 'rxjs/Observable';

import { Restangular } from 'ng2-restangular';
/**
 * Programación reactiva con observables
 */

@Injectable()
export class GestorTareasService {

  // private tareas: GestorTareasModel[] = [
  //   {id: new Date().getMilliseconds(),
  //    nombre: 'Interfaz de formulario principal',
  //    diaInicio: new Date('2016-10-02 00:00:00'),
  //    diaFin: new Date('2016-10-13 00:00:00'),
  //    prioridad: 4},
  //   {id: (new Date().getMilliseconds()) + 1,
  //    nombre: 'Función comparar arrays',
  //    diaInicio: new Date('2016-10-11 00:00:00'),
  //    diaFin: new Date('2016-10-14 00:00:00'),
  //    prioridad: 3},
  //   {id: (new Date().getMilliseconds()) + 2,
  //    nombre: 'Sprint de avance del proyecto',
  //    diaInicio: new Date('2016-10-13 00:00:00'),
  //    diaFin: new Date('2016-10-13 00:00:00'),
  //    prioridad: 7},
  //   {id: (new Date().getMilliseconds()) + 3,
  //    nombre: 'Hablar con cliente sobre el diseño',
  //    diaInicio: new Date('2016-10-15 00:00:00'),
  //    diaFin: new Date('2016-10-20 00:00:00'),
  //    prioridad: 10},
  // ];
  // Comunicación de elemenos mediantes Observable
  // private tareas$: Subject<Tarea[]> = new Subject<Tarea[]>();

  constructor(private http: Http, private restangular: Restangular) { }

  // getTareas$(): Tarea[] {
  //   return this.tareas;
  // }

  getTareas() {
    // El resto de llamadas son simples copias de las anteriores
        // return this.http.get('http://localhost:3000/tareas');
    //  return this.restangular.get('tareas');
    return this.restangular.all('tareas').getList();
    //  return tareas.getList().subscribe(accounts => {
    //   tareas = accounts;
    // });
  }

  delTarea(id: number): Observable<Response> {
    // El resto de llamadas son simples copias de las anteriores
        // return this.http.delete('http://localhost:3000/tareas/' + id);
    // Con restangular
        return this.restangular.one('tareas', id).remove();
  }

  addTarea(tarea: Tarea): Observable<Response> {
    let body = JSON.stringify({tarea});
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    // El resto de llamadas son simples copias de las anteriores
        return this.http.post('http://localhost:3000/tareas/', body, options);
  }


}
