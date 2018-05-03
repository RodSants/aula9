import { Component, OnInit } from '@angular/core';
import { LISTACOMPRAS } from "../mercado/lista-compras";
import { Compra } from "../mercado/compra";


@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  lista : Compra[] = LISTACOMPRAS;
  compra : Compra = new Compra();
  selectedCompra : Compra;

  constructor() { }

  ngOnInit() {
  }

  add(){
    let c = new Compra();
    c.produto = this.compra.produto;
    c.id = this.compra.id;
    c.quantidade = this.compra.quantidade;
    c.valor = this.compra.valor;
    console.log(c);
    this.lista.push(c);
  }

  selected(obj:Compra){
    this.selectedCompra = obj;
  }

}
