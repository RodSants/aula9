import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Endereco } from "../Model/endereco";

@Injectable()
export class EnderecoService{
    constructor(private http : HttpClient) {}

    getEndereco(cep : string) : Observable<Endereco>{
            return this.http.get<Endereco>(`https://viacep.com.br/ws/${cep}/json/`);
    }
}