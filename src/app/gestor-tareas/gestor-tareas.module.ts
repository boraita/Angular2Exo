import { GestorTareasService } from './gestor-tareas.service';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestorTareasComponent } from './gestor-tareas.component';
import { GestorTareasRoutingModule } from './gestor-tareas.routes';

@NgModule({
  imports: [CommonModule, GestorTareasRoutingModule],
  declarations: [GestorTareasComponent],
  providers: [GestorTareasService]

})
export class GestorTareasModule { }
