import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from "ngx-spinner";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CadastroProdutosComponent } from './cadastro-produtos/cadastro-produtos.component';
import { ConsultaProdutosComponent } from './consulta-produtos/consulta-produtos.component';
import { EdicaoProdutosComponent } from './edicao-produtos/edicao-produtos.component';

//mapeamento das rotas de navegação do projeto
const routes: Routes = [
  { path : 'cadastro-produtos', component: CadastroProdutosComponent },
  { path : 'consulta-produtos', component: ConsultaProdutosComponent },
  { path : 'edicao-produtos/:id', component: EdicaoProdutosComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CadastroProdutosComponent,
    ConsultaProdutosComponent,
    EdicaoProdutosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), //registrando as rotas
    HttpClientModule, //registrando a bilbioteca HTTPCLIENT
    BrowserAnimationsModule, //biblioteca para animações
    NgxSpinnerModule, //biblioteca do componente spinner
    FormsModule, //formulários reativos
    ReactiveFormsModule //formulários reativos
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
