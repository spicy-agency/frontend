import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from '../layout/layout.component';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {MainPageComponent} from './main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: MainPageComponent,
      },
      {
        path: '**',
        redirectTo: '',
      }
    ],
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot(routes),
    CommonModule,
    BrowserModule,
    NgOptimizedImage,
  ],
  declarations: [
    MainPageComponent,
  ],
  exports: [
    RouterModule,
  ],
})
export class RoutesModule {}
