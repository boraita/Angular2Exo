import { GestorTareasService } from './gestor-tareas.service';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SecurityService } from '../shared';
import { AUTH_PROVIDERS } from 'angular2-jwt';


import { GestorTareasComponent } from './gestor-tareas.component';
import { GestorTareasRoutingModule } from './gestor-tareas.routes';
import { OrderByPipe } from './order-by.pipe';

@NgModule({
  imports: [CommonModule, MaterialModule.forRoot(), FormsModule, ReactiveFormsModule, GestorTareasRoutingModule],
  declarations: [GestorTareasComponent, OrderByPipe],
  providers: [AUTH_PROVIDERS, GestorTareasService, SecurityService],

})
export class GestorTareasModule { }
