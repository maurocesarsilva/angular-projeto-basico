import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Produto } from "./produto";
import { Observable } from "rxjs";

@Injectable()
export class ProdutoService {

    constructor(private http: HttpClient) {

    }

    protected urlService: string = "https://672cfbc5fd8979715640f96c.mockapi.io/api/angular/produtos";

    obterProdutos(): Observable<Produto[]> {
        return this.http.get<Produto[]>(this.urlService);
    }

}