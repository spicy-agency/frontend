import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  public submitApplicationRoute: string = this.router.url.split('#')[0];

  constructor(private router: Router) {
  }

  public ngOnInit(): void {
    this.subscription.add(
      this.router.events.subscribe(() => {
        if (!this.router.url.includes('#')) {
          window.scrollTo(0,0);
        }
        this.submitApplicationRoute = this.router.url.split('#')[0];
      })
    );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
