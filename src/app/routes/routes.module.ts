import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from '../layout/layout.component';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot(routes),
    CommonModule,
    BrowserModule,
  ],
  exports: [
    RouterModule,
  ],
})
export class RoutesModule {}
