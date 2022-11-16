import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { AppRoutingModule } from './app-routing.module';
import { MateriasComponent } from './components/materias/materias.component';
import { MateriaComponent } from './components/materia/materia.component';
import { MateriasService } from './services/materias.service';
import { PaisesComponent } from './components/paises/paises.component';
import { PaisTarjetaComponent } from './components/pais-tarjeta/pais-tarjeta.component';
import { PaisDetalleComponent } from './components/pais-detalle/pais-detalle.component';
import { HttpClientModule } from '@angular/common/http';
import { PaisesService } from './services/paises.service';
import { SessionComponent } from './components/session/session.component';
import { DetailComponent } from './components/detail/detail.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    DirectivasComponent,
    MateriasComponent,
    MateriaComponent,
    PaisesComponent,
    PaisTarjetaComponent,
    PaisDetalleComponent,
    SessionComponent,
    DetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    MateriasService,
    PaisesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
