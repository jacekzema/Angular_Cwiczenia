import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDate]'
})
export class DateDirective {

  @Input()
  private date: string;
  private paragraph;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.paragraph = this.renderer.createElement('p');

  }

  @HostListener('mouseenter') // dekorator ktory bedzie dzialal jak najedziemy myszka
  mouseenter(eventDate: Event) {
    this.paragraph.innerHTML = this.date;
    this.renderer.appendChild(this.el.nativeElement, this.paragraph);

  }

  @HostListener('mouseleave') // dekorator ktory bedzie dzialal jak najedziemy myszka
  mouseleave(eventDate: Event) {
    console.log('mouse leave lol');
    this.renderer.removeChild(this.el.nativeElement, this.paragraph);

  }
}
