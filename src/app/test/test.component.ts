import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {

   @Input()
   tasks;

   @Output()
   eventTask = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  select(task){
    this.eventTask.emit(task);

  }

}
