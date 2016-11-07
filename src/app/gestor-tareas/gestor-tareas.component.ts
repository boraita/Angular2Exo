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
    let fecha = new Date().toISOString().slice(0, 16);
    this.complexForm = fbTareas.group({
    'nombre': ['', Validators.compose([Validators.required, Validators.minLength(5)])],
    'diaInicio': [fecha, Validators.required],
    'diaFin': [fecha, Validators.required],
    'prioridad': [0, Validators.required]
  });
   }

  ngOnInit() {
    this.tareasServicio.getTareas().subscribe(res => {
        // durante la suscripción se obtienen y transforman los datos
        if (res.status === 200) {
          let arrayTareas = res.json() || [];
          this.tareas = arrayTareas.tareas;
        }else {
          console.error(JSON.stringify(res));
        }
      });
  }

// Forma local
// submitForm(value: any): void {
//   value.id = (new Date().getMilliseconds());
//     this.tareas.push(value);
//   }
// relizado(value: any): void {
//   let index = this.tareas.indexOf(value, 0);
//   if (index > -1) {
//     this.tareas.splice(index, 1);
//   }
//   }
// Forma REST
// Insertar objeto en el array
submitForm(value: any): void {
  value.id = (new Date().getMilliseconds());
  this.tareasServicio.addTarea(value).subscribe( res => {
    if  (res.status === 200) {
        let arrayTareas = res.json() || [];
        this.tareas = arrayTareas.tareas;
    }else {
          console.error(JSON.stringify(res));
        }
  });
    this.tareas.push(value);
  }
// Quitar objeto del array
relizado(value: any): void {
 this.tareasServicio.delTarea(value.id).subscribe(res => {
        // durante la suscripción se obtienen y transforman los datos
        if (res.status === 200) {
          let arrayTareas = res.json() || [];
          this.tareas = arrayTareas.tareas;
        }else {
          console.error(JSON.stringify(res));
        }
      });
}

}
