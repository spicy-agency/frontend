import {Component} from '@angular/core';
import {CaseTileModel} from '../../shared/models/case-tile.model';
import {tiles} from '../../shared/data/tiles.data';

@Component({
  selector: 'cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss'],
})
export class CasesComponent {
  private readonly tilesOrder: string[] = [
    'innodom',
    'kub',
    'visa-global',
    'petlab',
    'station',
    'gusarov',
    'dev-place',
    'golden-shark',
    'overone',
  ];
  // @ts-ignore
  public tiles: CaseTileModel[] = this.tilesOrder.map((id: string) => tiles.find((tile: CaseTileModel) => tile.id === id));
  public numberTilesOnPage: number = 9;
  public maxTilesInRow: number = 3;
}
