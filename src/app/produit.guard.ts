import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './service/auth.service';

export class ProduitGuard implements CanActivate {
  constructor (private authService: AuthService,
    private route : Router) {}

    canActivate(route: ActivatedRouteSnapshot, tate: RouterStateSnapshot): boolean {
    if (this.authService.isAdmin())
    return true;
    else
    {
    this.route.navigate(['app-forbidden']);
    return false;
    }
};
}

