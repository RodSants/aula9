import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoComponent } from "./carrinho/carrinho.component";
import { ProdutoComponent } from "./produto/produto.component";
import { CadastroComponent } from "./cadastro/cadastro.component";


//import { Pagina2Component } from './pagina2/pagina2.component';

const routes: Routes = [
{ path: '', redirectTo: '/produto', pathMatch: 'full' },

{ path: 'produto', component: ProdutoComponent },
{ path: 'carrinho', component: CarrinhoComponent },
{ path: 'cadastro', component: CadastroComponent }
];

@NgModule({
imports: [ RouterModule.forRoot(routes) ],
exports: [ RouterModule ]
})

export class AppRoutingModule {}