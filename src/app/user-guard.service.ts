import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';
import { AppService }      from './app.service';

@Injectable()
export class UserGuard implements CanActivate {
  constructor(private appService: AppService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.appService.isLoggedIn()) { 
        return true; 
    }

    this.appService.redirectUrl = url;
    this.router.navigate(['/login']);
    return false;
  }
}