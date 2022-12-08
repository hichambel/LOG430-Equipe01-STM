import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { exhaustMap, Observable, take } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

    constructor(private authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return this.authService.utilisateur.pipe(
            take(1),
            exhaustMap(utilisateur => {
                if (!utilisateur) {
                    return next.handle(req);
                }

                const headers = new HttpHeaders({
                    'Authorization': `Bearer ${utilisateur.accessToken}`,
                    'Content-Type': 'application/json'
                });

                const nouvelleRequete = req.clone(
                    {
                        // params: new HttpParams().set('auth', utilisateur ? utilisateur.token : '')
                        headers
                    })
                return next.handle(nouvelleRequete);
            })
        );
    }
}