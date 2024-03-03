import {Component, Input} from '@angular/core';
import {PhotoModel} from '../../../../shared/data/innodom-photos.data';

@Component({
  selector: 'photo-collage',
  templateUrl: './photo-collage.component.html',
  styleUrls: ['./photo-collage.component.scss'],
})
export class PhotoCollageComponent {
  @Input() public photos: PhotoModel[] = [];
}
