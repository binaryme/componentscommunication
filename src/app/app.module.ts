import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UltimospedidosComponent } from './components/ultimospedidos/ultimospedidos.component';
import { MeserosComponent } from './components/meseros/meseros.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BootstrapService } from './services/bootstrap.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UltimospedidosComponent,
    MeserosComponent,
    ModalComponent,
    NavbarComponent
  ],
  imports: [BrowserModule, NgbModule.forRoot()],
  providers: [BootstrapService],
  bootstrap: [AppComponent]
})
export class AppModule {}
