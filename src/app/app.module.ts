import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { MdCoreModule } from '@angular/material/core';

import { AUTH_PROVIDERS } from 'angular2-jwt';

// Componentes declarados de este nivel
import { AppComponent } from './app.component';
import { NuevoComponentComponent } from './nuevo-component/nuevo-component.component';
import { SimpleFormComponent } from './nuevo-component/simple-form/simple-form.component';
import { DificilFormComponent } from './nuevo-component/dificil-form/dificil-form.component';
import { AppRoutingModule } from './app.routes';

// Modulos del componente
import { GestorTareasModule } from './gestor-tareas/gestor-tareas.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  // Componentes que se deen utilizar
  declarations: [
    AppComponent,
    NuevoComponentComponent,
    SimpleFormComponent,
    DificilFormComponent,
    LoginComponent
  ],
  // Modulos necesarios para la ejecución de las funciones
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    MdCoreModule,
    AppRoutingModule,
    GestorTareasModule
  ],
  // Declaración de servicios (Proveedores)
  providers: [AUTH_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
