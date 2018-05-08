import { Component, OnInit } from '@angular/core';
import { Produto } from "../Model/produto";
import { PRODUTOS } from "../Model/mock-produto";
import { StorageService } from "../services/storage.service";

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  [name: string]: any;

  produtos: Produto[] = PRODUTOS;
  carrinho: Produto[];
  total: number = 0;

  constructor(public storage: StorageService) { // Injetando o Serice Storage
    // Não esquecer de declarar o StorageService no app.module.ts
    this.carrinho = storage.getCarrinho();
  }

  ngOnInit() {
  }

  addcarrinho(produto: Produto) {

    if (!this.verificaItemCarrinho(produto)) {
      this.carrinho.push(produto);
      this.totalCarrinho();
      this.storage.setCarrinho(this.carrinho);
    }

  }

  totalCarrinho(): void {
    let tot = 0;
    for (let item of this.carrinho) {
      tot = tot + item.preco;
    }
    this.total = tot;

  }


  verificaItemCarrinho(produto: Produto): boolean {
    let existe = false;

    for (let item of this.carrinho) {
      if (item.id === produto.id) {
        existe = true;
      }
    }

      return existe;
  }


}
