import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { NavHeaderComponent } from './nav-header/nav-header.component'
import { ContactComponent } from './contact/contact.component'
import { FooterComponent } from './footer/footer.component'
import { GalleryComponent } from './gallery/gallery.component'
import { SliderComponent } from './slider/slider.component'
import { ReviewComponent } from './review/review.component'



@NgModule({
    declarations: [
        NavHeaderComponent,
        ContactComponent,
        FooterComponent,
        GalleryComponent,
        SliderComponent,
        ReviewComponent,
    ],
    imports: [CommonModule, RouterModule],
    exports: [
        NavHeaderComponent,
        ContactComponent,
        FooterComponent,
        GalleryComponent,
        SliderComponent,
        ReviewComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule { }
