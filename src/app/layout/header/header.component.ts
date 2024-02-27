import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  public submitApplicationRoute: string = this.router.url.split('#')[0];

  constructor(private router: Router) {
  }

  public ngOnInit(): void {
    this.subscription.add(
      this.router.events.subscribe(() => {
        this.submitApplicationRoute = this.router.url.split('#')[0];
      })
    );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
