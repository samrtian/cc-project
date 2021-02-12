import { Directive, Input, OnInit, OnDestroy, OnChanges, SimpleChanges, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFlop]',
  exportAs: 'letData'
})
export class FlopDirective implements OnInit, OnDestroy, OnChanges {

  @Input()
  data = 0;

  @Input()
  start = 0;

  @Input()
  ticks = 20;

  @Input()
  speed = 30;

  @Input()
  floor = true;

  interval = undefined;

  outputData = 0;

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    this.renderData();
  }


  ngOnDestroy(): void {
    this.clearInterval();
  }

  renderData() {
    this.clearInterval();

    const randomNumbers = [this.data];

    for (let i = 0; i < this.ticks - 1; i++) {
      if (this.floor) {
        randomNumbers.unshift(
          Math.floor(Math.random() * (this.data - this.start + 1) + this.start)
        );
      } else {
        randomNumbers.unshift(
          Math.random() * (this.data - this.start + 1) + this.start
        );
      }

    }

    randomNumbers.sort((a, b) => {
      return this.data > 0 ? a - b : b - a;
    });

    let x = 0;

    this.interval = setInterval(() => {
      this.outputData = randomNumbers.shift();
      if (++x === this.ticks) {
        this.clearInterval();
      }
    }, this.speed);

  }

  clearInterval() {
    if (this.interval) {
      window.clearInterval(this.interval);
      this.interval = undefined;
    }
  }

}
