import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { PaisesComponent } from './components/paises/paises.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { MateriasComponent } from './materias/materias.component';
import { PaisDetalleComponent } from './components/pais-detalle/pais-detalle.component';
import { NuevoUsuarioComponent } from './components/nuevo-usuario/nuevo-usuario.component';

const routes: Routes = [
  { path: 'home', component: BodyComponent},
  {path: 'directivas', component: DirectivasComponent},
  {path: 'materias', component: MateriasComponent},
  {path: 'paises', component: PaisesComponent},
  {path: 'detallePais/:id', component: PaisDetalleComponent},
  {path: 'nuevoUsuario', component: NuevoUsuarioComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

