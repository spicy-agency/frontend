import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from '../layout/layout.component';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {MainPageComponent} from './main-page/main-page.component';
import {CasesComponent} from './cases/cases.component';
import {ServicesComponent} from './services/services.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {ContactsComponent} from './contacts/contacts.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: MainPageComponent,
        data: {title: 'Spicy Agency'},
      },
      {
        path: 'cases',
        loadChildren: () => import('./cases/cases.module').then(m => m.CasesModule),
        data: {title: 'Кейсы'},
      },
      {
        path: 'services',
        component: ServicesComponent,
        data: {title: 'Услуги'},
      },
      {
        path: 'about-us',
        component: AboutUsComponent,
        data: {title: 'О нас'},
      },
      {
        path: 'contacts',
        component: ContactsComponent,
        data: {title: 'Контакты'},
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
    RouterModule.forRoot(routes, {anchorScrolling: 'enabled'}),
    CommonModule,
    BrowserModule,
  ],
  declarations: [
    MainPageComponent,
    CasesComponent,
    ServicesComponent,
    AboutUsComponent,
    ContactsComponent,
  ],
  exports: [
    RouterModule,
  ],
})
export class RoutesModule {}
