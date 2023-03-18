import { Component } from '@angular/core';
import { NewCardList } from './../interfaces/NewCard.interface';

@Component({
  selector: 'app-second-section',
  templateUrl: './second-section.component.html',
  styleUrls: ['./second-section.component.scss'],
})
export class SecondSectionComponent {
  constructor() {}

  list: NewCardList = [
    {
      title: 'Hydrogen VS Eletric Cars',
      text: 'Will hydrogen-fuelled cars ever catch up to EVs?',
      hasSeparator: true,
    },
    {
      title: 'The Downsides of AI Artistry',
      text: 'What are the possible adverse effects of on-demand AI image generation?',
      hasSeparator: true,
    },
    {
      title: 'Is VC funding Drying Up?',
      text: 'Private fundinfg by VC firms is down 50% YOY. We take a look at what that means.',
    },
  ];
}
