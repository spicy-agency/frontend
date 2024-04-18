import {NgModule} from '@angular/core';
import {InnodomComponent} from './innodom/innodom.component';
import {RouterModule, Routes} from '@angular/router';
import {CasesComponent} from './cases.component';
import {SharedModule} from '../../shared/shared.module';
import {PhotoCollageComponent} from './innodom/photo-collage/photo-collage.component';
import {PetlabComponent} from './petlab/petlab.component';
import {DevplaceComponent} from './devplace/devplace.component';
import {CubeComponent} from './cube/cube.component';
import {GoldenSharkComponent} from './golden-shark/golden-shark.component';

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
    path: 'petlab',
    component: PetlabComponent,
  },
  {
    path: 'devplace',
    component: DevplaceComponent,
  },
  {
    path: 'cube',
    component: CubeComponent,
  },
  {
    path: 'golden-shark',
    component: GoldenSharkComponent,
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
    PetlabComponent,
    DevplaceComponent,
    CubeComponent,
    GoldenSharkComponent,
  ],
  exports: [
    RouterModule,
  ],
})
export class CasesModule { }
