import {Component} from '@angular/core';
import {CaseTileModel} from '../../shared/models/case-tile.model';
import {
  SubmitApplicationButtonType
} from '../../shared/components/submit-application-link-button/submit-application-link-button.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  public tiles: CaseTileModel[] = [
    {
      src: 'assets/images/tiles/innodom.svg',
      alt: 'innodom-logo',
      description: 'innodom - разработка<br/>фирменного стиля',
      link: '#',
    },
    {
      src: 'assets/images/tiles/petlab.svg',
      alt: 'petlab-logo',
      description: 'petlab - привлечение<br/>экспертов к бренду',
      link: '#',
    },
    {
      src: 'assets/images/tiles/kub.svg',
      alt: 'kub-logo',
      description: 'упор на контент - создание<br/>фото- и видеоконтента<br/>для трех аккаунтов',
      link: '#',
    }
  ];
  public readonly submitApplicationButtonType: typeof SubmitApplicationButtonType = SubmitApplicationButtonType;
}
