import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  id: any;
  msg;
  author: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
      this._route.params.subscribe(params => {
      this.id = params['id'];  // (+) converts string 'id' to a number
      this.getAuthor();
     });
    }

    getAuthor(){
      let curAuth = this._httpService.getAuthorById(this.id);
      curAuth.subscribe(data => {
        console.log("found Author", data);
        this.author = data['data'][0];
        console.log(this.author);
      })
    }
    upVote(i){
      this.author.quotes[i].votes += 1
      let uAuth = this._httpService.editAuthor(this.id, this.author);
      uAuth.subscribe(data =>{
        console.log(this.author);
      })
    }
    downVote(i){
      this.author.quotes[i].votes -= 1
      let uAuth = this._httpService.editAuthor(this.id, this.author);
      uAuth.subscribe(data =>{
        console.log(this.author);
      })
    }
    delete(i){
      this.author.quotes.splice(i,1);
      let uAuth = this._httpService.editAuthor(this.id, this.author);
      uAuth.subscribe(data =>{
        console.log(this.author);
      })
    }

  }



