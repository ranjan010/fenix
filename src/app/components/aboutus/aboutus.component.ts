import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor() { }
  services = [
    {
      title: 'Residential',
      image: 'assets/gallery/Gallery1.jpg',
      description: 'Our residential customers are so much more to us than just customers. We see how a new more functional kitchen impacts the lives of our clients, and it means the most to us. Our company DNA is centered around providing the highest level of service possible and a willingness to always go the extra mile for our customers. No matter what your style is, we will make your dream kitchen, bathroom, or laundry room dream your reality. Whether you are looking for a simple'
    },
    {
      title: 'Commercial',
      image: 'assets/gallery/Gallery 2.JPEG',
      description: `In commercial ventures, we merge innovation with practicality. Our designs aren't just about looks; they're about optimizing functionality to boost productivity and leave a lasting impression. From modern offices to functional retail spaces, we deliver tailored solutions that reflect your brand and drive success.`
    },
    {
      title: 'Hospitality',
      image: 'assets/gallery/Hotel.jpg',
      description: `In hospitality, every detail counts. We specialize in creating inviting spaces that captivate guests and leave a lasting impact. Whether it's a boutique hotel or a bustling restaurant, our designs strike the perfect balance between comfort, functionality, and style, transforming spaces into unforgettable experiences.`
    },
    {
      title: 'Customized',
      image: 'assets/gallery/hospitality.jpg',
      description: `With custom projects, we bring your unique vision to life. From home renovations to bespoke furniture, we craft solutions tailored to your needs and preferences. Collaborating closely with you, we ensure every detail reflects your style, delivering custom creations that exceed expectations and stand the test of time.`
    },
  ];
  ngOnInit(): void {
  }

}
