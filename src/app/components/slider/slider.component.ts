import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  @Input()
  image1Alt: string = 'Kitchen Cabinet Business'
  @Input()
  content1: string = 'Transforming your kitchen with custom cabinets'
  @Input()
  action2: string = 'View Our Gallery'
  @Input()
  heading1: string = 'Upgrade Your Kitchen with Quality Cabinets'
  @Input()
  action1: string = 'Get a Free Quote'
  @Input()
  image1Src: string =
    'https://images.unsplash.com/photo-1602028915047-37269d1a73f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNDg2MjM5Mnw&ixlib=rb-4.0.3&q=80&w=1080'
  constructor() { }
}
