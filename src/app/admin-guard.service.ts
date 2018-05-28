import {Injectable} from '@angular/core';
import {AppService} from './app.service';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private appService: AppService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    const url: string = state.url;

    return this.checkAdmin(url);
  }

  checkAdmin(url: string): Promise<boolean> {
    return this.appService.isAdmin().then((loggedIn) => {
      if (loggedIn) {
        return true;
      } else {
        this.appService.redirectUrl = url;
        this.router.navigate(['/login'], { queryParams: {error: "admin"}});
        return false;
      }
    }).catch(() => false);
  }
}
