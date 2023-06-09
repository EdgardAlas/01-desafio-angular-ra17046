import { BlogCard } from './../interfaces/BlogCard.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss'],
})
export class BlogCardComponent implements OnInit {
  @Input() card: BlogCard = null;

  constructor() {}

  ngOnInit(): void {}
}
