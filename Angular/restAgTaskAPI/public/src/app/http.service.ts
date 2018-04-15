import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) {
    //this.getTasks();
    //this.getTaskById();
  }
  getTasks(){
    //http response is an observable, store it in
    //the variable tempObservable
    //let tempObservable = this._http.get('/tasks');
    //subscribe to out observable and provide the code 
    //we would like to do with out data from the response
    //tempObservable.subscribe(data => console.log("Got tasks!", data));
    return this._http.get('/tasks');
  }
  getTaskById(id){
    //let getTask = this._http.get('/tasks/5acbcf52d81f7a54b6aaa16a');
    //getTask.subscribe(data => console.log("Found Task", data));
    return this._http.get('/tasks/' + id);
  }
  addTask(newtask){
    console.log("addTask hit")
    return this._http.post('/tasks', newtask);
  }
  removeTask(id){
    return this._http.delete('/tasks/' + id);
  }
  completeTask(id){
     let status = {completed: true};
     return this._http.put('/tasks/'+id, status); 
  }
}
