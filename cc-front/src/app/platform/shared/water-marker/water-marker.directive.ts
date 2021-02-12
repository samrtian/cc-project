import { Directive, Input, OnInit, ElementRef, OnDestroy, Renderer2, OnChanges, SimpleChanges } from '@angular/core';
import { WaterMarkerOptionModel } from '@platform/common/model/water-marker-model';
import * as lodash from 'lodash';

/**
 * 水印
 */
@Directive({
  selector: '[appWaterMarker]'
})
export class WaterMarkerDirective implements OnInit, OnDestroy, OnChanges {

  @Input()
  options: WaterMarkerOptionModel;

  @Input()
  zIndex: number = 999999;

  //默认配置
  defaultOptions: WaterMarkerOptionModel = {
    watermarkLabel: '水印',
    watermarkXSpace: 100,
    watermarkYSpace: 35,
    watermarkColor: 'rgba(0,0,0,0.65)',
    watermarkFontSize: '13px',
    watermarkAlpha: 0.08,
    watermarkWidth: 130,
    watermarkHeight: 55,
    watermarkAngle: 15,
    watermarkX: 0,
    watermarkY: 0,
    showWaterMark: true
  };

  waterMarkerObj: any = undefined;


  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    // this.options = lodash.merge({}, this.defaultOptions, this.options);
    // this.initWaterEvent();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.options && !changes.options.firstChange) {
      this.options = lodash.merge({}, this.defaultOptions, this.options);
      this.initWaterEvent();
    }
  }

  initWaterEvent() {
    if (this.options.showWaterMark) {
      this.initWaterMarker();
      this.renderer.listen('window', 'resize', () => {
        setTimeout(() => {
          this.initWaterMarker();
        }, 100);
      });
    } else {
      this.waterMarkerDestroy();
    }
  }

  initWaterMarker() {
    this.waterMarkerDestroy();
    const elementAttrs = this.getElementAttrs();
    this.waterMarkerObj = this.createWaterMarkerObj(elementAttrs);
    if (this.waterMarkerObj) {
      this.elementRef.nativeElement.appendChild(this.waterMarkerObj);


      const watermarkCols = Math.ceil(elementAttrs.width / (this.options.watermarkWidth + this.options.watermarkXSpace));
      const watermarkRows = Math.ceil(elementAttrs.height / (this.options.watermarkHeight + this.options.watermarkYSpace));


      let x: number;
      let y: number;
      for (let i = 0; i < watermarkRows; i++) {
        y = this.options.watermarkY + (this.options.watermarkYSpace + this.options.watermarkHeight) * i;
        for (let j = 0; j < watermarkCols; j++) {
          x = this.options.watermarkX + (this.options.watermarkWidth + this.options.watermarkXSpace) * j;

          const maskDiv = document.createElement('div');
          const oText = document.createTextNode(this.options.watermarkLabel);
          maskDiv.appendChild(oText);


          maskDiv.style.transform = 'rotate(-' + this.options.watermarkAngle + 'deg)';
          maskDiv.style.visibility = '';
          maskDiv.style.position = 'absolute';
          maskDiv.style.left = x + 'px';
          maskDiv.style.top = y + 'px';
          maskDiv.style.overflow = 'hidden';
          maskDiv.style.zIndex = this.zIndex + '';
          maskDiv.style.opacity = this.options.watermarkAlpha + '';
          maskDiv.style.fontSize = this.options.watermarkFontSize;
          maskDiv.style.color = this.options.watermarkColor;
          maskDiv.style.textAlign = 'center';
          maskDiv.style.width = this.options.watermarkWidth + 'px';
          maskDiv.style.height = this.options.watermarkHeight + 'px';
          maskDiv.style.display = 'block';
          this.waterMarkerObj.appendChild(maskDiv);
        }

      }
    }
  }


  getElementAttrs() {
    const elementAttrs: any = {};
    const clientRect = this.elementRef.nativeElement.getBoundingClientRect();
    if (!!clientRect) {
      elementAttrs.width = clientRect.width;
      elementAttrs.height = clientRect.height;
      elementAttrs.left = clientRect.left;
      elementAttrs.top = clientRect.top;
    } else {
      elementAttrs.width = this.elementRef.nativeElement.offsetWidth;
      elementAttrs.height = this.elementRef.nativeElement.offsetHeight;
      elementAttrs.left = this.elementRef.nativeElement.offsetLeft;
      elementAttrs.top = this.elementRef.nativeElement.offsetTop;
    }
    return elementAttrs;
  }


  createWaterMarkerObj(elementAttrs: any) {
    const divObj = document.createElement('div');
    divObj.style.position = 'fixed';
    divObj.style.pointerEvents = 'none';
    divObj.style.width = elementAttrs.width + 'px';
    divObj.style.height = elementAttrs.height + 'px';
    divObj.style.zIndex = this.zIndex + '';
    divObj.style.top = elementAttrs.top + 'px';
    divObj.style.left = elementAttrs.left + 'px';
    return divObj;
  }


  waterMarkerDestroy() {
    if (this.waterMarkerObj !== undefined) {
      this.elementRef.nativeElement.removeChild(this.waterMarkerObj);
      this.waterMarkerObj = undefined;
    }
  }

  ngOnDestroy() {
    this.waterMarkerDestroy();
  }

}
