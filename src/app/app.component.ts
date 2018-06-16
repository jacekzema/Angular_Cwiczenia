import {Component, OnInit} from '@angular/core';
import {TasksService} from './services/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TasksService]
})

// export class AppComponent {
//
//   tasksList = ['Robienie czegos', 'A tutaj czegos innego', 'a tutaj może coś jeszcze?'];
//
//   selected(task: string): void {
//     console.log(task);
//
//   }
// }

// export class AppComponent {
//   title = 'Angulara';
//   pi = Math.PI;
//   date = new Date();
//   dog: Dog;
//   days = ['Poniedzialek', 'Wtorek', 'Srode' , 'Czwartek', 'Piatek', 'Sobota', 'Niedziela'];
//   dogs = new Array<dog>(); //tworzenie listy z psami
//   constructor(){
//     this.dogs.push(new Dog('Reksio',43), new Dog('Bartek', 24), new Dog('Maciej',1), new Dog('Sracek',1), new Dog('MIchauuuuu',7));
//   }
// }
//
// class Dog{
//   constructor(public name: string, public age: number) {
//   }
// }

// export class AppComponent {
//   inputText = 'Tekst';
//   maxLengt = 5;
//   colorClass = 'color';
//   logoUrl = '';
//
//   isDisable = true;
//
//   constructor() {
//     setTimeout(() => {
//       this.isDisable = false;
//     }, 3000);
//   }
//
//   change() {
//     this.inputText = 'Zmienilem tekst i kolor tez';
//     this.maxLengt = 10;
//     this.colorClass = 'color2';
//     this.logoUrl = 'https://seeklogo.com/images/A/angular-logo-B76B1CDE98-seeklogo.com.png';
//   }
// }

// export class AppComponent {
//
//   inputText = '';
//   colorClass = 'color';
//   isDisable = true;
//
//   constructor() {
//   }
//     onFocus()
//     {
//       this.colorClass = 'color2';
//     }
//   onClick(event) {
//     console.log(event);
//   }
//   onMouseMove(event) {
//     console.log('x: ' + event.clientX + ', y' + event.clientY);
//   }
//   onPaste() {
//   this.inputText = 'Nie wklejaj, pisz!';
//   }
//   change() {
//     this.isDisable = false;
//   }
// }

// export class AppComponent {
//
//   profession = 'programista';
//   skill = 'angular';
//
//   constructor() {
//   }

  // inputP(event){
  //   this.profession = event.target.value;
  // }
  // inputS(event){
  //   this.skill = event.target.value; no need for 2way binding
  // }
// }

export class AppComponent{



}

