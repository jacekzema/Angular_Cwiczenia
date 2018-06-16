import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { Task } from '../models/task';

@Injectable()
export class TasksService{

  private tasksList: Array<Task> = [];
  private doneTasksList: Array<Task> = [];

  private tasksListObs = new BehaviorSubject <Array<Task>>([]);
  private doneTasksListObs = new BehaviorSubject <Array<Task>>([]);

 constructor(){
    this.tasksList = [
      {name: 'Mycie Auta', created: new Date()},
      {name: 'Moja stara patrzy', created: new Date()},
      {name: 'Nauka o Angularze', created: new Date()},
      {name: 'Itp tip tip', created: new Date()}];   //zamiana na JSON ze stringa

    this.tasksListObs.next(this.tasksList);
  }

  add(task: Task) {
    this.tasksList.push(task);
    this.tasksListObs.next(this.tasksList);
  }
  remove(task: Task) {
    this.tasksList = this.tasksList.filter (e => e !==task);  //usuwanie przez filtrowanie
    this.tasksListObs.next(this.tasksList);

  }
  done(task: Task) {
    this.doneTasksList.push(task);  //dodawanie przez filtrowanie
    this.remove(task);
    this.doneTasksListObs.next(this.doneTasksList);
  }

  getTasksListObs(): Observable<Array<Task>> {
   return this.tasksListObs.asObservable();
  }

  getDoneTasksListObs(): Observable<Array<Task>> {
    return this.doneTasksListObs.asObservable();
  }
}
