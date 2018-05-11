import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ProdutoComponent } from './produto/produto.component';
import { HeaderComponent } from './header/header.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { StorageService } from "./services/storage.service";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EnderecoService } from "./services/endereco,service";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    HeaderComponent,
    CarrinhoComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule //Uso se for utilizar webservice
  ],
  providers: [StorageService, EnderecoService], //Todos os serviços
  bootstrap: [AppComponent]
})
export class AppModule { }
