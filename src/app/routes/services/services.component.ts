import {Component} from '@angular/core';
import {
  SubmitApplicationButtonType
} from '../../shared/components/submit-application-link-button/submit-application-link-button.component';

@Component({
  selector: 'services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  public submitApplicationButtonType: typeof SubmitApplicationButtonType = SubmitApplicationButtonType;
}
