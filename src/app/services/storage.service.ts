
import { Injectable } from "@angular/core";
import { Produto } from "../Model/produto";

@Injectable()
export class StorageService{

    setCarrinho(carrinho : Array<Produto>){
        localStorage.setItem('CARRINHO', JSON.stringify(carrinho));
    }

    getCarrinho() : Array<Produto>{
        let carrinho = localStorage.getItem('CARRINHO');

        if(carrinho != null){
            return JSON.parse(carrinho);
        }else{
            return new Array<Produto>();
        }
    }

}