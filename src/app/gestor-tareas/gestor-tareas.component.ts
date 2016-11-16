import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Tarea } from './gestor-tareas-model';
import { GestorTareasService } from './gestor-tareas.service';
// import { Observable } from 'rxjs/Observable';
import { Restangular } from 'ng2-restangular';

@Component({
  selector: 'app-gestor-tareas',
  templateUrl: './gestor-tareas.component.html',
  styleUrls: ['./gestor-tareas.component.css']
})
export class GestorTareasComponent implements OnInit {
  tareas: Tarea[];
  // tareas$: Observable<Tarea[]>;
  complexForm: FormGroup;

  constructor(private tareasServicio: GestorTareasService, fbTareas: FormBuilder, public restangular: Restangular) {
    let fecha = new Date().toISOString().slice(0, 16);
    this.complexForm = fbTareas.group({
    'nombre': ['', Validators.compose([Validators.required, Validators.minLength(5)])],
    'diaInicio': [fecha, Validators.required],
    'diaFin': [fecha, Validators.required],
    'prioridad': [0, Validators.required]
  });
   }

  ngOnInit() {

    this.tareasServicio.getTareas().subscribe(response => {
      this.tareas = response;
    });

  }

// Forma REST
// Insertar objeto en el array
submitForm(value: any): void {
  value.id = (new Date().getMilliseconds());
  this.tareasServicio.addTarea(value).subscribe( res => {
    if  (res.status === 200) {
        this.tareas = res.json() || [];
    }
  });
  }
// Quitar objeto del array
relizado(value: any): void {

console.log(this.tareasServicio.delTarea(value.id));

//  .subscribe(res => {
//         // durante la suscripción se obtienen y transforman los datos
//         if  (res === 'OK') {
//           delete this.tareas[value.id];
//         }else {
//           console.error(JSON.stringify(res));
//         }
//       });
}

  trackByFn(index, item) {
      return index; // or item.id
  }

}
