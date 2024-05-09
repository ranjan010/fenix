import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  cookiesLink: string = 'Cookies'
  action1: string = 'Contact Us'
  copyright: string = `© ${new Date().getFullYear()} Fenix Kitchen Cabinet. All rights reserved.`
  privacyLink: string = 'Privacy Policy'
  termsLink: string = 'Terms of Service'
  logoSrc: string =
    '/assets/logo.png'
  content2: string =
    'Follow us on social media for more updates and inspiration.'
  logoAlt: string = 'Kitchen Cabinet Business Logo'
  content1: string = 'Transforming kitchens with quality cabinets.'
  constructor() { }
}

export const FooterConstants = {
  cookiesLink: 'Cookies',
  contactAction: 'contact',
  copyrightText: `© ${new Date().getFullYear()} Fenix Kitchen Cabinet. All rights reserved.`,
  privacyLink: 'Privacy Policy',
  termsLink: 'Terms of Service',
  logoSrc: '/assets/logo.png',
  contentText: 'Follow us on social media for more updates and inspiration',
  logoAlt: 'Fenix Kitchen Cabinet',
  sloganText: 'Transforming kitchens with quality cabinets'
}