import {Component, Input} from '@angular/core';

@Component({
  selector: 'case-tile',
  templateUrl: './case-tile.component.html',
  styleUrls: ['./case-tile.component.scss'],
})
export class CaseTileComponent {
  @Input() public src: string = '';
  @Input() public alt: string = '';
  @Input() public description: string = '';
  @Input() public link: string = '#';
  @Input() public width: number = 420;
  @Input() public height: number = 420;
}
