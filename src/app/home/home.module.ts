import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './home.component'
import { ComponentsModule } from '../components/components-module'

const routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
]

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule,ComponentsModule, RouterModule.forChild(routes)],
  exports: [HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
