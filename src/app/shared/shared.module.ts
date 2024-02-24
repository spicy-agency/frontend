import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {CaseTileComponent} from './components/case-tile/case-tile.component';
import {RouterLinkWithHref} from '@angular/router';
import {
  SubmitApplicationLinkButtonComponent
} from './components/submit-application-link-button/submit-application-link-button.component';

const importsExports: any[] = [
  CommonModule,
  NgOptimizedImage,
  RouterLinkWithHref,
];
const declarations: any[] = [
  CaseTileComponent,
  SubmitApplicationLinkButtonComponent,
];

@NgModule({
  imports: [
    ...importsExports,
  ],
  declarations: [
    ...declarations,
  ],
  exports: [
    ...importsExports,
    ...declarations,
  ],
})
export class SharedModule {

}
