import { BlogCardList } from './../interfaces/BlogCard.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-section',
  templateUrl: './third-section.component.html',
  styleUrls: ['./third-section.component.scss'],
})
export class ThirdSectionComponent implements OnInit {
  list: BlogCardList = [
    {
      number: 1,
      img: 'assets/images/image-retro-pcs.jpg',
      text: 'What happends when old PCs are given moderm upgrades?',
      title: 'Reviving Retro Pcs',
    },
    {
      number: 2,
      img: 'assets/images/image-top-laptops.jpg',
      text: 'Our best picks for various needs and budgets',
      title: 'Top 10 Laptops of 2022',
    },
    {
      number: 3,
      img: 'assets/images/image-gaming-growth.jpg',
      text: 'How the pandemic has sparked fresh opportunities',
      title: 'The Growth of Gaming',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
