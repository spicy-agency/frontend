import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

const importsExports: any[] = [
  CommonModule,
];

@NgModule({
  imports: [
    ...importsExports,
  ],
  exports: [
    ...importsExports,
  ],
})
export class SharedModule {

}
