import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  coins = 0;
  value = 1;
  ledger = [];
  questions = [
    ["test question 1 (answer 7)", "7"],
    ["test question 2 (answer 6)", "6"],
    ["test question 3 (answer 4)", "4"],
    ["test question 4 (answer 9)", "9"],
    ["test question 5 (answer 0)", "0"],
    ["all out of algorithms to mine"]
  ]
  constructor(private _http: HttpClient) { }
  getQuestions(){
    return this.questions;
  }
  shiftQuestions(){
    this.questions.shift();
    return this.questions;
  }
  getCoins(){
    return this.coins;
  }
  addCoin(){
    this.coins += 1;
    this.ledger.push({
      id: this.ledger.length,
      action:"Mined",
      amount: 1,
      value: this.value
    })
  }
  buyCoin(num){
    this.ledger.push({
      id: this.ledger.length,
      action:"Bought",
      amount: num,
      value: this.value
    })
    this.coins += parseInt(num);
    this.value += parseInt(num);
  }
  sellCoin(num){
    if(this.coins - parseInt(num) < 0){
      console.log("You can't sell more coins that you have!");
    }else{
      this.ledger.push({
        id: this.ledger.length,
        action:"Sold",
        amount: num,
        value: this.value
      })
      this.coins -= parseInt(num);
      if(this.value - parseInt(num) <= 0){
        this.value = 1;
      }else{
        this.value -= parseInt(num);
      }
    }
  }
}
