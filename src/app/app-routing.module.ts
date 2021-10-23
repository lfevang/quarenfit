import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { MenuComponent } from "./menu/menu.component";
import { NovaSenhaComponent } from "./nova-senha/nova-senha.component";
import { PessoaAlterarComponent } from "./pessoa/pessoa-alterar/pessoa-alterar.component";
import { PessoaInserirComponent } from "./pessoa/pessoa-inserir/pessoa-inserir.component";

const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'esqueciSenha', component: NovaSenhaComponent},
    {path: 'perfil', component: PessoaAlterarComponent},
    {path: 'inserirPessoa', component: PessoaInserirComponent}
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
