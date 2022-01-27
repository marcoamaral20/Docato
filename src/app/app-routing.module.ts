import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './view/login/login.component';
import { CadastrarComponent } from './view/cadastrar/cadastrar.component';
import { EditarComponent } from './view/editar/editar.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { ProdutosComponent } from './produtos/produtos.component';

const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch:'full'},
  { path: 'login',     component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'cadastrar', component: CadastrarComponent},
  { path: 'editar/:id',    component: EditarComponent},
  { path: 'produtos',    component: ProdutosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, DashboardComponent, EditarComponent, CadastrarComponent]
