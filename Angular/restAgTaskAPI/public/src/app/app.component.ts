import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Restful Tasks API';
  tasks = [];
  taskId = [];
  newTask: any;
  test: string;

  constructor(private _httpService: HttpService){
  }
  ngOnInit(){
    //ngOnInit is envoked as soon as component is ready
    this.getTasksFromService();
    this.getIdFromService();
    this.newTask = { title: "", description: "" }
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
  onSubmit() {
    // Code to send off the form data (this.newTask) to the Service
    let oNewTask = this._httpService.addTask(this.newTask);
    oNewTask.subscribe(data =>{
      console.log("success from the server", data)
      // Reset this.newTask to a new, clean object.
      this.newTask = { title: "", description: "" }
    })
  }
  trackByFn(index, item) {
    return index; // or item.id
  }
  removeTask(id){
    let dTask = this._httpService.removeTask(id);
    dTask.subscribe(data =>{
      console.log("task deleted", data);
    })
  }
  markComplete(id){
    let uTask = this._httpService.completeTask(id);
    uTask.subscribe(data =>{
      console.log("completed task", data);
    })
  }
}
