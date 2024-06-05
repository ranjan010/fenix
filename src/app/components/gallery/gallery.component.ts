import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  images: string[] = [
    'assets/gallery/Gallery1.jpg',
    'assets/gallery/Gallery 2.JPEG',
    'assets/gallery/Gallery 3.JPG',
    'assets/gallery/gallery8.jpeg',
    'assets/gallery/gallery15.jpeg',
    'assets/gallery/Gallery%204.JPEG',
    'assets/gallery/gallery9.JPG',
    'assets/gallery/gallery11.jpeg',
  ];

  currentIndex: number = 0;
  selectedImage: string | null = null;

  constructor() { }

  showImage(image: string) {
    this.selectedImage = image;
    this.currentIndex = this.images.indexOf(image);
  }

  hideImage() {
    this.selectedImage = null;
  }

  nextImage() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
      this.selectedImage = this.images[this.currentIndex];
    }
  }

  prevImage() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.selectedImage = this.images[this.currentIndex];
    }
  }

  @Input()
  image3Src: string =
    'https://images.unsplash.com/photo-1551836022-b06985bceb24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNDg2MjM5Mnw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  content1: string =
    'Browse through our collection of beautifully crafted kitchen cabinets to get inspiration for your next project.'
  @Input()
  image1Src: string =
    'https://images.unsplash.com/photo-1611818830402-d07de749ed59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNDg2MjM5Mnw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image3Alt: string = 'Sleek Black Kitchen Cabinets'
  @Input()
  image2Alt: string = 'Classic Wooden Kitchen Cabinets'
  @Input()
  image2Src: string =
    'https://images.unsplash.com/photo-1555737202-2e86ace3b68f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNDg2MjM5Mnw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  heading1: string = 'Our Kitchen Cabinet Gallery'
  @Input()
  image1Alt: string = 'Modern White Kitchen Cabinets'
}
