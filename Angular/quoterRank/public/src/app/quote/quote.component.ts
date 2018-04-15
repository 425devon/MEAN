import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  id: any;
  msg: any;
  author: any;
  newQuote: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
      this._route.params.subscribe((params: Params) => { 
      this.id = params['id'];
     });
     this.getAuthor();
     this.newQuote = { desc: "", votes: 0, id: Math.floor(Math.random()*100000)+1 };
  }
  getAuthor(){
    let curAuth = this._httpService.getAuthorById(this.id);
    curAuth.subscribe(data => {
      this.author = data['data'][0];
      console.log("Author found", this.author);
    })
  }

  onSubmit() {
    let uAuth = this._httpService.addAuthorQuote(this.id, this.newQuote);
    uAuth.subscribe(data =>{
      if(data['message'] == "error"){
        this.msg = "Quote must be atleast three characters long"
        return;
      }else{
        this.goHome();
      }
    })
    this.newQuote = { desc: "", votes: 0, id: "" }
  }

  goHome() {
    this._router.navigate(['/show/'+this.id]);
  }

}
