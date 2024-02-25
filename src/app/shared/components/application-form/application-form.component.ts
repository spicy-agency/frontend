import {Component} from '@angular/core';
import {SubmitApplicationButtonType} from '../submit-application-link-button/submit-application-link-button.component';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss'],
})
export class ApplicationFormComponent {
  public readonly submitApplicationButtonType: typeof SubmitApplicationButtonType = SubmitApplicationButtonType;
  public form: FormGroup = this.fb.group({
    name: new FormControl(''),
    telegramOrPhone: new FormControl(''),
    email: new FormControl(''),
    textarea: new FormControl(''),
    interested: new FormControl(''),
  });
  public options: {id: string; label: string}[] = [
    {
      id: 'smm',
      label: 'smm',
    },
    {
      id: 'video',
      label: 'видео-контент',
    },
    {
      id: 'site',
      label: 'сайт',
    },
    {
      id: 'copyright',
      label: 'копирайт',
    },
    {
      id: 'consultation',
      label: 'консультация',
    },
    {
      id: 'company-audit',
      label: 'аудит компании',
    },
    {
      id: 'strategy-development',
      label: 'разработка стратегии',
    },
  ];

  constructor(private fb: FormBuilder) {
  }
}
