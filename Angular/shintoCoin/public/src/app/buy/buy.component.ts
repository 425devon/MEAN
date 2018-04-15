import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  value = this._httpService.value;
  coins = this._httpService.coins;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }
  buyCoins(num){
    this._httpService.buyCoin(num);
    this.value = this._httpService.value;
    this.coins = this._httpService.coins;
  }
}
