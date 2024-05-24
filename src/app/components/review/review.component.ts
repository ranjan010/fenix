import { Component, OnInit } from '@angular/core';

interface Review {
  title: string;
  content: string;
  rating: number;
  author: string;
  date: Date;
}

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  reviews: Review[] = [];

  constructor() { }

  ngOnInit(): void {
    this.reviews = [
      {
        title: 'Outstanding Quality and Service',
        content: 'The kitchen cabinets from this company are of outstanding quality. The craftsmanship is evident in every detail. The installation was smooth and the team was professional and courteous. I highly recommend their services!',
        rating: 5,
        author: 'Emily Johnson',
        date: new Date('2023-07-15')
      },
      {
        title: 'Beautiful Cabinets, Excellent Customer Service',
        content: 'I recently remodeled my kitchen and chose this company for my cabinets. They are beautiful and exactly what I wanted. The customer service was excellent from start to finish. They were very responsive to my questions and needs.',
        rating: 5,
        author: 'Michael Brown',
        date: new Date('2023-06-20')
      },
      {
        title: 'Good Quality, Minor Issues',
        content: 'The cabinets are of good quality and look great in my kitchen. However, there were minor delays in the delivery. The team handled it professionally, but it did cause some inconvenience. Overall, I am happy with the purchase.',
        rating: 4,
        author: 'Sophia Martinez',
        date: new Date('2023-05-10')
      },
      {
        title: 'Great Value for the Price',
        content: 'The cabinets are a great value for the price. While the finish had a few minor imperfections, the overall quality is good. The installation team was friendly and efficient, and the customer service was helpful throughout the process. I’m satisfied with my purchase and would consider buying from them again.',
        rating: 4,
        author: 'James Wilson',
        date: new Date('2023-04-18')
      },
      // Add more reviews as needed
    ];
  }

  getStars(rating: number): Array<number> {
    return Array(Math.round(rating)).fill(0);
  }

  getEmptyStars(rating: number): Array<number> {
    return Array(5 - Math.round(rating)).fill(0);
  }
}
