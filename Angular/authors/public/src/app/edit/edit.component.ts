import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: any;
  msg;
  author = {
    _id: String,
    name: String
  };
  private sub: any;
  constructor(
    private _httpService: HttpService,
    private route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
    this.id = params['id'];  // (+) converts string 'id' to a number
    console.log(this.id)
    this.getAuthor();
    
   });
  }
  getAuthor(){
    let curAuth = this._httpService.getAuthorById(this.id);
    curAuth.subscribe(data => {
      console.log("found Author");
      this.author = data['data'][0];
      console.log(this.author);
    })
  }
  editAuthor(){
    let uAuthor = this._httpService.editAuthor(this.id, this.author);
    uAuthor.subscribe(data =>{
      if(data['message'] == "Error"){
        this.msg = "There was an error updating author"
      }else{
        this.goHome();
      }
    })
  }
  goHome() {
    this._router.navigate(['/home']);
  }
}
