import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

// Librerias externas
import { RestangularModule } from 'ng2-restangular';

// Componentes declarados de este nivel
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';

// componentes externos
import { NuevoComponentComponent, SimpleFormComponent, DificilFormComponent } from './nuevo-component';
import { LoginComponent } from './login/login.component';

// Modulos del componente
import { GestorTareasModule } from './gestor-tareas/gestor-tareas.module';


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
    AppRoutingModule,
    GestorTareasModule,
    RestangularModule.forRoot((RestangularProvider) => {
        RestangularProvider.setBaseUrl('http://localhost:3000');
        RestangularProvider.setDefaultHeaders({'Authorization': 'Bearer UDXPx-Xko0w4BRKajozCVy20X11MRZs1'});
      }
    )
  ],
  // Declaración de servicios (Proveedores)
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
