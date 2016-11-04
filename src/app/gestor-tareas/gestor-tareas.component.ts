import { Component, OnInit } from '@angular/core';

import { Tarea } from './gestor-tareas-model';
import { GestorTareasService } from './gestor-tareas.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-gestor-tareas',
  templateUrl: './gestor-tareas.component.html',
  styleUrls: ['./gestor-tareas.component.css']
})
export class GestorTareasComponent implements OnInit {
  tareas: Tarea[];
  tareas$: Observable<Tarea[]>;
  constructor(private tareasServicio: GestorTareasService) { }

  ngOnInit() {
    this.tareas = this.tareasServicio.getTareas$();
  }



}
