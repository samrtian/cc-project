import { Component, OnInit } from '@angular/core';
import { SpinningService } from './spinning.service';

@Component({
  selector: 'app-spinning',
  templateUrl: './spinning.component.html',
  styleUrls: ['./spinning.component.less']
})
export class SpinningComponent implements OnInit {

  show = false;

  constructor(private spinningService: SpinningService) { }

  ngOnInit() {
    this.spinningService.getSpinning().forEach((showSpin: boolean) => {
      setTimeout(() => {
        this.show = showSpin;
      }, 66);
    });
  }

}
