import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, take, tap } from 'rxjs';
import { AuthService } from './auth.service';
import { Utilisateur } from './utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.authService.utilisateur.pipe(
      take(1),
      map(utilisateur => {
        const estAuthentifier = !!utilisateur;

        if (estAuthentifier) {
          return true;
        }
        return this.router.createUrlTree(['/acceuil']);
        
      })
    );
  }
  
}
