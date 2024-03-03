import {Component} from '@angular/core';
import {
  digitalConferencePhotos,
  openDayPhotos,
  PhotoModel,
  workshopForDesignersPhotos
} from '../../../shared/data/innodom-photos.data';

@Component({
  selector: 'innodom',
  templateUrl: './innodom.component.html',
  styleUrls: ['./innodom.component.scss'],
})
export class InnodomComponent {
  public openDayPhotos: PhotoModel[] = openDayPhotos;
  public digitalConferencePhotos: PhotoModel[] = digitalConferencePhotos;
  public workshopForDesignersPhotos: PhotoModel[] = workshopForDesignersPhotos;
}
