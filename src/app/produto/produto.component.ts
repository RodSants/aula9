import { Component, OnInit } from '@angular/core';
import { Produto } from "../Model/produto";
import { PRODUTOS } from "../Model/mock-produto";

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
    [name: string]: any;
    
    produtos : Produto[] = PRODUTOS;
    carrinho : Produto[];
    total: number =0;

  constructor() { 
    this.carrinho = new Array<Produto>();
  }

  ngOnInit() {
  }

  addcarrinho(produto : Produto){
    this.carrinho.push(produto);
    console.log(this.carrinho.length);
    this.totalCarrinho();
  }

  //if (!this.verificaItrmCarrinho(produto))

  totalCarrinho(): void {
    let tot = 0;
    for (let item of this.carrinho) {
      tot = tot + item.preco;
    }
    this.total = tot;
  }

  verificarItemCarrinho(produto: Produto): boolean {
    let existe = false;

    for(let item of this.carrinho) {
      if (item.id === produto.id){
        existe = true;
      }
    }
    return existe;
  }
}
