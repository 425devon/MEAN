import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAuthors(){
    return this._http.get('/authors');
  }
  getAuthorById(id){
    return this._http.get('/authors/' + id);
  }
  addAuthor(newAuthor){
    console.log("service add auth route hit")
    return this._http.post('/authors', newAuthor);
  }
  editAuthor(id, author){
    return this._http.put('/authors/'+id, author);
  }
  removeAuthor(id){
    return this._http.delete('/authors/' + id);
  }
  addAuthorQuote(id, quote){
    return this._http.put('/authors/quotes/' + id, quote);
  }
}
