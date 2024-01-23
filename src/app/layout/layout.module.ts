import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {LayoutComponent} from './layout.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';

const importsExports: any[] = [
  LayoutComponent,
  HeaderComponent,
  FooterComponent,
];

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    ...importsExports,
  ],
  exports: [
    ...importsExports,
  ],
})
export class LayoutModule {}
