import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CadUsuarioComponent } from './pages/usuario/cad-usuario/cad-usuario.component';
import { FormControl, FormGroup } from '@angular/forms';
import { CadMaterialComponent } from './pages/cad-material/cad-material.component';
import { CadProdutoComponent } from './pages/cad-produto/cad-produto.component';
import { CadPomarComponent } from './pages/cad-pomar/cad-pomar.component';
import { CadMovimentoComponent } from './pages/cad-movimento/cad-movimento.component';
import { CadColheitaComponent } from './pages/cad-colheita/cad-colheita.component';
import { CadArvoreComponent } from './pages/cad-arvore/cad-arvore.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'cadUsuario',component:CadUsuarioComponent},
  {path:'cadMaterial',component:CadMaterialComponent},
  {path:'cadProduto',component:CadProdutoComponent},
  {path:'cadPomar', component:CadPomarComponent},
  {path:'cadMovimento', component:CadMovimentoComponent},
  {path:'cadColheita', component:CadColheitaComponent},
  {path:'cadArvore', component: CadArvoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
