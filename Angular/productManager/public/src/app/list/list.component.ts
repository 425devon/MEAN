import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products = [];
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts(){
    let products = this._httpService.allProducts();
    products.subscribe(data =>{
      this.products = data['data']
    })
  }
  delete(index, id){
    this.products.splice(index, 1);
    let O = this._httpService.deleteProduct(id);
    O.subscribe();
  }
}
