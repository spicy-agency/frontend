import {Component} from '@angular/core';
import {CaseTileModel} from '../../shared/models/case-tile.model';
import {tiles} from '../../shared/data/tiles.data';

@Component({
  selector: 'cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss'],
})
export class CasesComponent {
  public tiles: CaseTileModel[] = tiles;
  public numberTilesOnPage: number = 9;
  public maxTilesInRow: number = 3;
}
