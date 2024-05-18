import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-slider',
  templateUrl: './carousel-slider.component.html',
  styleUrls: ['./carousel-slider.component.css']
})
export class CarouselSliderComponent implements OnInit {
  images: string[] = [
    'https://images.unsplash.com/photo-1551836022-b06985bceb24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNDg2MjM5Mnw&ixlib=rb-4.0.3&q=80&w=1080',
    'https://images.unsplash.com/photo-1602028915047-37269d1a73f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNDg2MjM5Mnw&ixlib=rb-4.0.3&q=80&w=1080',
    'https://images.unsplash.com/photo-1555737202-2e86ace3b68f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNDg2MjM5Mnw&ixlib=rb-4.0.3&q=80&w=1080'
  ];
  currentIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  nextSlide() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}