import {Component, Input, OnInit} from '@angular/core';
import {TasksService} from '../services/tasks.service';
import {Task} from '../models/task';
import {s} from '@angular/core/src/render3';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {

  doneTasksList: Array<Task>=[];

  constructor(private tasksService: TasksService) {
    this.tasksService.getDoneTasksListObs().subscribe((tasks: Array<Task>)=>{
      this.doneTasksList = tasks;
    });
  }

  ngOnInit() {
  }

}
