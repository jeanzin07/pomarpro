import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http:HttpClient) { }


  public addProduto(info:any):Observable<any>{
    return this.http.post(
      'http://localhost:3000/produto/add',
      {info},
      {observe:'response'})
  }

  //Função de busca de usuários
  public getProduto():Observable<any>{
    return this.http.get('http://localhost:3000/produto/buscaTodos',
      {observe:'response'}
    )
  }
}
