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
    let url: string = state.url;

    return this.checkAdmin(url);
  }

  checkAdmin(url: string): Promise<boolean> {
    return this.appService.isAdmin().then((loggedIn) => {
      if (loggedIn) {
        return true;
      } else {
        this.appService.redirectUrl = url;
        this.router.navigate(['/login']);
        return false;
      }
    }).catch(() => { return false; });
  }
}
