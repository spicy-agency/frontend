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
import {StationComponent} from './station/station.component';
import {VisaGlobalComponent} from './visa-global/visa-global.component';
import {OveroneComponent} from './overone/overone.component';

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
    path: 'station',
    component: StationComponent,
  },
  {
    path: 'visa-global',
    component: VisaGlobalComponent,
  },
  {
    path: 'overone',
    component: OveroneComponent,
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
    StationComponent,
    VisaGlobalComponent,
    OveroneComponent,
  ],
  exports: [
    RouterModule,
  ],
})
export class CasesModule { }
