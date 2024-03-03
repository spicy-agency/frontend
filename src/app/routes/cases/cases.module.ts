import {NgModule} from '@angular/core';
import {InnodomComponent} from './innodom/innodom.component';
import {RouterModule, Routes} from '@angular/router';
import {CasesComponent} from './cases.component';
import {SharedModule} from '../../shared/shared.module';
import {PhotoCollageComponent} from './innodom/photo-collage/photo-collage.component';

const routes: Routes = [
  {
    path: '',
    component: CasesComponent,
  },
  {
    path: 'innodom',
    component: InnodomComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ],
  declarations: [
    InnodomComponent,
    PhotoCollageComponent,
  ],
  exports: [
    RouterModule,
  ],
})
export class CasesModule { }
