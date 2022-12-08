import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { MateriasComponent } from './materias/materias.component';
import { MateriaComponent } from './materia/materia.component';
import { MateriasService } from './services/materias.service';
import { PaisTarjetaComponent } from './components/pais-tarjeta/pais-tarjeta.component';
import { HttpClientModule } from '@angular/common/http';
import { PaisesComponent } from './components/paises/paises.component';
import { PaisesService } from './services/paises.service';
import { CommonModule } from '@angular/common';
import { PaisDetalleComponent } from './components/pais-detalle/pais-detalle.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NuevoUsuarioComponent } from './components/nuevo-usuario/nuevo-usuario.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { CardUsuarioComponent } from './components/card-usuario/card-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    DirectivasComponent,
    MateriasComponent,
    MateriaComponent,
    NuevoUsuarioComponent,
    PaisesComponent,
    PaisTarjetaComponent,
    PaisDetalleComponent,
    UsuariosComponent,
    CardUsuarioComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    MateriasService,
    PaisesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
