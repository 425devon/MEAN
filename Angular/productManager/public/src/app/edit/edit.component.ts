import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id:any;
  msg: any;
  product: {
    _id: String,
    title: String,
    price: String,
    url: String
  }
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => this.id = params['id']);
    let O = this._httpService.oneProduct(this.id);
    O.subscribe(data =>{ this.product = data['data'][0]});
  }
  onSubmit(){
    console.log(this.product);
    let O = this._httpService.editProduct(this.product._id, this.product);
    O.subscribe(data =>{
      if(data['message'] == "Error"){
        this.msg = data['Error']
      }else{
        this.goHome();
      }
    })
  }
  goHome() {
    this._router.navigate(['/list']);
  }

}
