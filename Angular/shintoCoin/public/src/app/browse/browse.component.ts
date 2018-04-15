import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  ledger = this._httpService.ledger;
  detail;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }
  makeCur(item){
    this.detail = item;
  }
}
