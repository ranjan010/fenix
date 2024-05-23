import { Component, Input } from '@angular/core';
import { ScrollService } from '../nav-header/scroll-service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  @Input() image1Alt: string = 'Kitchen Cabinet Business';
  @Input() content1: string = 'Transforming your kitchen with custom cabinets';
  @Input() content2: string = 'Pay us a visit or give us a call, we can plan your kitchen together';
  @Input() action2: string = 'View More On Instagram';
  @Input() heading1: string = 'Welcome to Fenix Kitchen Cabinets';
  @Input() action1: string = 'View Our Gallery';
  @Input() image1Src: string = 'https://images.unsplash.com/photo-1602028915047-37269d1a73f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNDg2MjM5Mnw&ixlib=rb-4.0.3&q=80&w=1080';

  constructor(private scrollService:ScrollService) { }

  scrollToSection(sectionId: string): void {
    this.scrollService.scrollToSection(sectionId);
  }
  
  openInstagram(){
    window.location.href='https://www.instagram.com/fenix.kitchens/';
  }
}
