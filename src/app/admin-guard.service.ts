import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AppService} from './app.service';

@Injectable()
export class AdminGuard implements CanActivate {
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
