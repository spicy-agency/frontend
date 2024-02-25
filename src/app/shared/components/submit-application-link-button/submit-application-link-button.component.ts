import {Component, Input} from '@angular/core';

@Component({
  selector: 'submit-application-link-button',
  templateUrl: './submit-application-link-button.component.html',
  styleUrls: ['./submit-application-link-button.component.scss'],
})
export class SubmitApplicationLinkButtonComponent {
  public readonly buttonType: typeof SubmitApplicationButtonType = SubmitApplicationButtonType;

  @Input() public isButton: boolean = false;
  @Input() public type: SubmitApplicationButtonType = SubmitApplicationButtonType.Orange;
  @Input() public linkHref: string = '#';

  public buttonClicked(): void {

  }
}

export enum SubmitApplicationButtonType {
  Orange,
  White,
  OrangeWithBlack,
  Purple,
}
