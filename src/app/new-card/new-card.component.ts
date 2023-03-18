import { NewCard } from './../interfaces/NewCard.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.scss'],
})
export class NewCardComponent {
  constructor() {}

  @Input() new: NewCard = null;
}
