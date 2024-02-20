import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {LayoutComponent} from './layout.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {MainComponent} from './main/main.component';
import {RouterOutlet} from '@angular/router';

const importsExports: any[] = [
  LayoutComponent,
  HeaderComponent,
  FooterComponent,
  MainComponent,
];

@NgModule({
  imports: [
    SharedModule,
    RouterOutlet,
  ],
  declarations: [
    ...importsExports,
  ],
  exports: [
    ...importsExports,
  ],
})
export class LayoutModule {}
