import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }

  allProducts(){
    return this._http.get('/products');
  }
  oneProduct(id){
    return this._http.get('/products/' + id);
  }
  newProduct(product){
    return this._http.post('/products', product);
  }
  editProduct(id , product){
    return this._http.put('/products/' + id, product);
  }
  deleteProduct(id){
    return this._http.delete('/products/' + id);
  }
}
