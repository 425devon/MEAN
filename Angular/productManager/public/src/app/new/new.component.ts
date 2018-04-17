import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  msg: any;
  product = {
    title: "",
    price: "",
    url: ""
  }
  constructor(
    private _httpService: HttpService,
    private _router: Router) { }

  ngOnInit() {
  }
  onSubmit(){
    let add = this._httpService.newProduct(this.product);
    add.subscribe(data =>{
      if(data['message'] == "Error"){
        console.log(data['Error'])
      }else{
        this.product = { title: "", price: "", url: ""};
        this.goHome();
      }
    })
  }
  goHome() {
    this._router.navigate(['/list']);
  }
}
