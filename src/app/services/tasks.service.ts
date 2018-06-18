import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { Task } from '../models/task';
import {HttpService} from './http.service';

@Injectable()
export class TasksService {

  //private tasksList: Array<Task> = [];
  //private doneTasksList: Array<Task> = [];

  private tasksListObs = new BehaviorSubject<Array<Task>>([]);

  // private doneTasksListObs = new BehaviorSubject <Array<Task>>([]);

  constructor(private httpService: HttpService) {
    //const tasksList = [
      // {name: 'Mycie Auta', created: new Date().toLocaleString(), isDone: false},
      // {name: 'Inne zadanie na maxa', created: new Date().toLocaleString(), isDone: false},
      // {name: 'Nauka o Angularze', created: new Date().toLocaleString(), isDone: false},
      // {name: 'Itp tip tip', created: new Date().toLocaleString(), isDone: false},
      // {name: 'Itp tip tipsa', created: new Date().toLocaleString(), end: new Date().toLocaleString(), isDone: true}
     // ];   //zamiana na JSON ze stringa
    // this.tasksListObs.next(tasksList);

    this.httpService.getTasks().subscribe(list=>{
      this.tasksListObs.next(list);
    });


  }

  add(task: Task) {
    const list = this.tasksListObs.getValue();
    list.push(task);
    this.tasksListObs.next(list);
  }

  remove(task: Task) {
    const list = this.tasksListObs.getValue().filter(e => e !== task);  //usuwanie przez filtrowanie
    this.tasksListObs.next(list);

  }

  done(task: Task) {
    // this.doneTasksList.push(task);  //dodawanie przez filtrowanie
    // this.remove(task);
    // this.doneTasksListObs.next(this.doneTasksList);
    task.end = new Date().toLocaleString();
    task.isDone = true;
    const list = this.tasksListObs.getValue();
    this.tasksListObs.next(list);  //trzeba rozpropagowac,żeby inny widzieli ze sie zmienila
  }

  getTasksListObs(): Observable<Array<Task>> {
    return this.tasksListObs.asObservable();
  }

  saveTasksInSB(){
    this.httpService.saveTasks(this.tasksListObs.getValue());
  }

}
