import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  msg;
  questions = this._httpService.questions;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }

  answerQuestion(ans){
    if(ans === this.questions[0][1]){
      this.msg = "correct!";
      this._httpService.addCoin();
      console.log(this._httpService.getCoins());
      if(this.questions.length == 1){
        this.msg = "out of algorithms to mine...";
      }
      this.questions = this._httpService.shiftQuestions();
    }else{
      this.msg = "incorrect!";
    }
  }
}
