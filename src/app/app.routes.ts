/** fichero para configurar el enrutado de un módulo
 *  en el proyecto inical no se usa
 *  es frecuente hacer la configuración directamente en el módulo raíz 
 */
// importar las herramientas necesarias
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Nuevas rutas
import { NuevoComponentComponent } from './nuevo-component/nuevo-component.component';
import { LoginComponent } from './login/login.component';

// definir las rutas
const routes: Routes = [{ path: '', component: NuevoComponentComponent }, { path: 'login', component: LoginComponent }];
// Para realizar el lazy loaders
// const lazyRoutes: Routes = [{ path: 'tareas',  component: GestorTareasModule}];
// configurar el modulo
@NgModule({
  imports: [RouterModule.forRoot(routes)], // rutas para el módulo raíz
  exports: [RouterModule], // esto es lo que el se verá desde el raíz
  providers: []
})
export class AppRoutingModule { }
