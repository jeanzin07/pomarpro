import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CadUsuarioComponent } from './pages/usuario/cad-usuario/cad-usuario.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { CadMaterialComponent } from './pages/cad-material/cad-material.component';
import { CadProdutoComponent } from './pages/cad-produto/cad-produto.component';
import { CadPomarComponent } from './pages/cad-pomar/cad-pomar.component';
import { CadMovimentoComponent } from './pages/cad-movimento/cad-movimento.component';
import { CadColheitaComponent } from './pages/cad-colheita/cad-colheita.component';
import { CadArvoreComponent } from './pages/cad-arvore/cad-arvore.component';
import { MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    CadUsuarioComponent,
    CadMaterialComponent,
    CadProdutoComponent,
    CadPomarComponent,
    CadMovimentoComponent,
    CadColheitaComponent,
    CadArvoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDatepickerModule
  ],
  providers: [provideHttpClient(), provideAnimationsAsync('noop'), provideNativeDateAdapter(),{provide:MAT_DATE_LOCALE,useValue:'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
