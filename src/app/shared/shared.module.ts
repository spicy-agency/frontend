import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {CaseTileComponent} from './components/case-tile/case-tile.component';
import {RouterLinkWithHref} from '@angular/router';

const importsExports: any[] = [
  CommonModule,
  NgOptimizedImage,
  RouterLinkWithHref,
];
const declarations: any[] = [
  CaseTileComponent,
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
