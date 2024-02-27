import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from '../layout/layout.component';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {MainPageComponent} from './main-page/main-page.component';
import {CasesComponent} from './cases/cases.component';

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
        path: 'cases',
        component: CasesComponent,
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
  ],
  declarations: [
    MainPageComponent,
    CasesComponent,
  ],
  exports: [
    RouterModule,
  ],
})
export class RoutesModule {}
