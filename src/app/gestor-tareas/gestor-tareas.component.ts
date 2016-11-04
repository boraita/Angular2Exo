import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  complexForm: FormGroup;

  constructor(private tareasServicio: GestorTareasService, fbTareas: FormBuilder) {
    this.complexForm = fbTareas.group({
    'nombre': ['', Validators.compose([Validators.required, Validators.minLength(5)])],
    'diaInicio': [Date.now, Validators.required],
    'diaFin': [Date.now, Validators.required],
    'prioridad': [0, Validators.required]
  });
   }

  ngOnInit() {
    this.tareas = this.tareasServicio.getTareas$();
  }


submitForm(value: any): void {
    console.log('Reactive Form Data: ');
    console.log(value.nombre);
  }


}
