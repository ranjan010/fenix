import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ScrollService } from './scroll-service';


@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent {

  logoSrc: string =
    '/assets/logo2.png'
  @Input()
  action2: string = '/about'
  @Input()
  logoAlt: string = 'Fenix Cabinates'
  @Input()


  menuItems: any[] = [];
  constructor(private http: HttpClient, private scrollService: ScrollService) {

  }

  ngOnInit(): void {
    this.http.get<any[]>('/assets/json/menulist.json').subscribe(data => {
      this.menuItems = data;
      console.log(this.menuItems);
    });
  }

  scrollToSection(sectionId: string): void {
    this.scrollService.scrollToSection(sectionId);
  }
}
