import { Component, OnInit } from '@angular/core';
import { SysLogoModel } from '@platform/common/model/sys-logo-model';
import { environment } from '@environments/environment';
import { DeskLayoutComponent as PlatformDeskLayoutComponent } from '@platform/shared/layout/desk-layout/desk-layout.component';

@Component({
  selector: 'app-desk-layout',
  templateUrl: './desk-layout.component.html',
  styleUrls: ['./desk-layout.component.less']
})
export class DeskLayoutComponent extends PlatformDeskLayoutComponent implements OnInit {
  sysLogo: SysLogoModel = null;

  ngOnInit() {
    super.ngOnInit();
  }

}
