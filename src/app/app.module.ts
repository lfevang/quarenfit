import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { PessoaInserirComponent } from './pessoa/pessoa-inserir/pessoa-inserir.component';
import { PessoaListarComponent } from './pessoa/pessoa-listar/pessoa-listar.component';
import { PessoaAlterarComponent } from './pessoa/pessoa-alterar/pessoa-alterar.component';
import { PessoaDeletarComponent } from './pessoa/pessoa-deletar/pessoa-deletar.component';
import { MenuComponent } from './menu/menu.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { PrestadorComponent } from './prestador/prestador.component';
import { PrestadorInserirComponent } from './prestador/prestador-inserir/prestador-inserir.component';
import { PrestadorAlterarComponent } from './prestador/prestador-alterar/prestador-alterar.component';
import { PrestadorDeletarComponent } from './prestador/prestador-deletar/prestador-deletar.component';
import { PrestadorListarComponent } from './prestador/prestador-listar/prestador-listar.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PessoaComponent,
    PessoaInserirComponent,
    PessoaListarComponent,
    PessoaAlterarComponent,
    PessoaDeletarComponent,
    MenuComponent,
    CabecalhoComponent,
    PrestadorComponent,
    PrestadorInserirComponent,
    PrestadorAlterarComponent,
    PrestadorDeletarComponent,
    PrestadorListarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
