import { GestorTareasService } from './gestor-tareas.service';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GestorTareasComponent } from './gestor-tareas.component';
import { GestorTareasRoutingModule } from './gestor-tareas.routes';

@NgModule({
  imports: [CommonModule, MaterialModule.forRoot(), FormsModule, ReactiveFormsModule, GestorTareasRoutingModule],
  declarations: [GestorTareasComponent],
  providers: [GestorTareasService],

})
export class GestorTareasModule { }
