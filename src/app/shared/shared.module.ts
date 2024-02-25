import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {CaseTileComponent} from './components/case-tile/case-tile.component';
import {RouterLinkWithHref} from '@angular/router';
import {
  SubmitApplicationLinkButtonComponent
} from './components/submit-application-link-button/submit-application-link-button.component';
import {ApplicationFormComponent} from './components/application-form/application-form.component';
import {ReactiveFormsModule} from '@angular/forms';

const importsExports: any[] = [
  CommonModule,
  NgOptimizedImage,
  RouterLinkWithHref,
  ReactiveFormsModule,
];
const declarations: any[] = [
  CaseTileComponent,
  SubmitApplicationLinkButtonComponent,
  ApplicationFormComponent,
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
