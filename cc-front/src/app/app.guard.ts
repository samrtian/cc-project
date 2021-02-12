import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { PlatformAuth } from '@platform/shared/platform-auth/platform-auth';

@Injectable({
  providedIn: 'root'
})
export class AppGuard extends PlatformAuth implements CanActivate {
}
