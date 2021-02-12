import { Component } from '@angular/core';
import { LoginComponent as PlatformLoginComponent } from '@platform/shared/login/login.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent extends PlatformLoginComponent { }
