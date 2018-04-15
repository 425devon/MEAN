import { Component, OnInit, NgZone } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authors = [];
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
    private zone:NgZone
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => console.log(params['id']));
    this.getAuthors();
  }
  getAuthors(){
    let authors = this._httpService.getAuthors();
    authors.subscribe(data => {
      console.log("got authors", data)
      this.authors = data['data'];
      console.log(this.authors)
    })
  }
  delete(id){
   let dAuth = this._httpService.removeAuthor(id);
   dAuth.subscribe(data => { console.log("author deleted", data)})
   this.zone.run(()=>{})
  }
  
  goHome() {
    this._router.navigate(['/home']);
  }
}
