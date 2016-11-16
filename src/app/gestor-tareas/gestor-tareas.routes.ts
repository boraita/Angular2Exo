/** fichero para configurar el enrutado de un módulo
 *  en el proyecto inical no se usa
 *  es frecuente hacer la configuración directamente en el módulo raíz 
 */
// importar las herramientas necesarias
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Seguridad con JWT
import { SecurityService } from '../shared';

// Nuevas rutas
import { GestorTareasComponent } from './gestor-tareas.component';
// definir las rutas
const routes: Routes = [{ path: 'tareas', component: GestorTareasComponent, canActivate: [SecurityService] }];
// Para realizar el lazy loaders
// const lazyRoutes: Routes = [{ path: 'tareas',  component: GestorTareasModule}];
// configurar el modulo
@NgModule({
  imports: [RouterModule.forChild(routes)], // rutas para el módulo raíz
  providers: []
})
export class GestorTareasRoutingModule { }
