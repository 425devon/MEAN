import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  gold = 0;
  log = [];
  constructor(private _httpService: HttpService){}
  ngOnInit(){

  }
  farm(){
    let num = (Math.floor(Math.random()* (4-2 + 1)+2));
    this.log.push(`you made ${num} gold on the farm`);
    console.log(this.log);
    this.gold += num;
  }
  cave(){
    let num = (Math.floor(Math.random()* (10-5 + 1)+5));
    this.log.push(`you found ${num} gold in the cave`);
    console.log(this.log);
    this.gold += num;
  }
  house(){
    let num = (Math.floor(Math.random()* (15-7 + 1)+7));
    this.log.push(`you got ${num} gold from the house`);
    console.log(this.log);
    this.gold += num;
  }
  casino(){
    let num = (Math.floor(Math.random()* (200) -100));
    this.log.push(`tested your luck and got ${num} gold from the casino`);
    console.log(this.log);
    this.gold += num;
  }
}
