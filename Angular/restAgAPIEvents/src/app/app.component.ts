import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Restful Tasks API';
  tasks = [];
  taskId = [];
  test: string;

  constructor(private _httpService: HttpService){
  }
  ngOnInit(){
    //ngOnInit is envoked as soon as component is ready
    //this.getTasksFromService();
    this.getIdFromService();
    this.test = "this is a test message";
  }
  getTasksFromService(){
    let observableTask = this._httpService.getTasks();
    observableTask.subscribe(data =>{
      console.log("Got Task Data!", data);
      this.tasks = data['data'];
      console.log(this.tasks);
    })
  }
  getIdFromService(){
    let oTask = this._httpService.getTasks();
    oTask.subscribe(data =>{
    for(let d in data['data']){
      this.taskId.push(data['data'][d]._id);
    }
    console.log(this.taskId);
    })
  }
  findTaskByid(e){
    console.log(e);
  }
}
