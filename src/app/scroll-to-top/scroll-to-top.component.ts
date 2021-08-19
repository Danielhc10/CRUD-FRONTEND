import { ViewportScroller } from '@angular/common';
import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.css']
})
export class ScrollToTopComponent {
  private toogle_ratio: number;
  @HostBinding('class.showBtn') showBtn: boolean;

  constructor(
    private _scroller: ViewportScroller,
  ) {
    this.toogle_ratio = 0.50;
    this.showBtn = false;
  }

  @HostListener('window:scroll', ['$event']) onScroll($event: Event): void {
    const document = ($event.target as Document).documentElement;
    const scrollTotal = document.scrollHeight - document.clientHeight;
    this.showBtn = (document.scrollTop / scrollTotal) > this.toogle_ratio ?? false;
  }

  @HostListener('click') onClick(): void {
    this._scroller.scrollToPosition([0, 0]);
  }
}