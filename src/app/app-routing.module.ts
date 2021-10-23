import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { MenuComponent } from "./menu/menu.component";
import { PessoaAlterarComponent } from "./pessoa/pessoa-alterar/pessoa-alterar.component";

const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'entrar', component: MenuComponent},
    {path: 'alterarPerfil', component: PessoaAlterarComponent}
]

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule{

}
