import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  msg;
  coins = this._httpService.coins;
  value = this._httpService.value;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }
  sellCoins(num){
    if(this.coins - parseInt(num) < 0){
      this.msg = "You can't sell more coins that you have!";
    }else{
      this._httpService.sellCoin(num);
      this.coins = this._httpService.coins;
      this.value = this._httpService.value;
    }
  }
}
