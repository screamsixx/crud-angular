import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    // Verificar la existencia de la variable 'id' en el localStorage
    const email = localStorage.getItem('email');
    if (!email) {
      // Redirigir al usuario a la página de inicio de sesión
      return this.router.parseUrl('/login');
    } else if (email == '0') {
      return this.router.parseUrl('/login');
    }
    // El usuario está autenticado
    return true;
  }
}
