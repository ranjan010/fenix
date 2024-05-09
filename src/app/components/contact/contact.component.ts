import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @Input()
  email1: string = 'fenixkitchensca@gmail.com'
  @Input()
  content2: string =
    'Our team is ready to assist you with your kitchen cabinet needs.'
  @Input()
  address1: string = '2395 Cawthra Road Unit #12, Missisauga, Ontario'
  @Input()
  heading1: string = 'Contact Us'
  @Input()
  content1: string =
    'Feel free to reach out to us for any inquiries or to schedule a consultation.'
  @Input()
  phone1: string = '437 992 2999'
  @Input()
  content3: string = 'You can also visit our showroom during business hours.'
  @Input()
  content4: string =
    'Follow us on social media for the latest updates and design inspirations.'
  @Input()
  content5: string = 'We look forward to hearing from you!'
  constructor() { }
}

