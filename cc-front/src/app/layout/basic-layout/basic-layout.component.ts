import { Component, OnInit } from '@angular/core';

import { BasicLayoutComponent as PlatformBasicLayoutComponent } from '@platform/shared/layout/basic-layout/basic-layout.component';
import { SysLogoModel } from '@platform/common/model/sys-logo-model';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-basic-layout',
  templateUrl: './basic-layout.component.html',
  styleUrls: ['./basic-layout.component.less']
})
export class BasicLayoutComponent extends PlatformBasicLayoutComponent implements OnInit {
  showSider = true;
  sysLogo: SysLogoModel = environment.sysLogo;

  ngOnInit() {
    super.ngOnInit();
  }

}
