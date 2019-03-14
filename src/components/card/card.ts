import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the CardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'card',
  templateUrl: 'card.html'
})
export class CardComponent {

  @Input('student') student:any;
  @Output('click-card') card = new EventEmitter<any>();

  constructor() {
  }

  clickCard() {
    this.card.emit(this.student);
  }

}
