import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  newAuthor: any;
  msg;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => console.log(params['id']));
    this.newAuthor = { name: ""};
  }
  createAuthor(){
    let newAuthors = this._httpService.addAuthor(this.newAuthor);
    newAuthors.subscribe(data =>{
      console.log("success", data)
      if(data['message'] == "Error"){
        this.msg = "Error saving, name must be atleast 3 characters long";
        this.newAuthor = { name: ""};
      }else{
        this.newAuthor = { name: ""};
        this.goHome();
      }
    })
  }
  goHome() {
    this._router.navigate(['/home']);
  }
}
