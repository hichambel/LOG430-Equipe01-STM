import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError, catchError, tap, BehaviorSubject } from 'rxjs';
import { AuthResponseData } from './auth-response-data';
import { Utilisateur } from './utilisateur.model';

// const API_KEY = 'AIzaSyD4UH2u-jiJORowvKXrg65vOu1FsohaJHQ';
// const API_ENDPOINT_INSCRIPTION = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=' + API_KEY;
// const API_ENDPOINT_CONNEXION = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' + API_KEY;

const API_ENDPOINT_INSCRIPTION = 'http://localhost:4000/auth/signup'; // TODO: confirmer l'URL ENDPOINT
const API_ENDPOINT_CONNEXION = 'http://localhost:4000/auth/signin'; // TODO: confirmer l'URL ENDPOINT

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private chronoExpirationToken: any;

  utilisateur = new BehaviorSubject<Utilisateur | null>(null);

  constructor(private http: HttpClient, private router: Router) { }

  connecter(courriel: string, mdp: string): Observable<any> {
    return this.http.post<any>(
      API_ENDPOINT_CONNEXION,
      { 
        email: courriel,
        password: mdp
      },
      httpOptions
      )
      .pipe(tap(reponse => {
        console.log('je recois cette reponse : ', reponse.stringify());
        this.gererAuthentification(
          reponse.courriel,
          reponse.id,
          reponse.refreshToken
        );
      })
    );
  }

  inscrire(courriel: string, mdp: string): Observable<any> {
    return this.http.post<AuthResponseData>(
      API_ENDPOINT_INSCRIPTION,
      { 
        email: courriel,
        password: mdp,
      },
      httpOptions
      )
      .pipe(tap(reponse => {
        this.gererAuthentification(
          reponse.courriel,
          reponse.id,
          reponse.refreshToken,
        );
      })
    );
  }

  deconnecter() {
    this.utilisateur.next(null);
    this.router.navigate(['/acceuil']);
    localStorage.removeItem('utilisateur');
    if (this.chronoExpirationToken) {
      clearTimeout(this.chronoExpirationToken);
    }
    this.chronoExpirationToken = null;
  }

  /*autoConnexion() {
    const utilisateurJSON = localStorage.getItem('utilisateur');

    if (!utilisateurJSON) {
      return;
    }

    let utilisateurSTRING: {courriel: string, id: string, _token: string, _tokenExpirationDate: string} = JSON.parse(utilisateurJSON);
    const utilisateur = new Utilisateur(
      utilisateurSTRING.courriel,
      utilisateurSTRING.id,
      utilisateurSTRING._token,
      new Date(utilisateurSTRING._tokenExpirationDate)
    );

    if (utilisateur.token !== '') {
      const dureeExpiration = new Date(utilisateurSTRING._tokenExpirationDate).getTime() - new Date().getTime();
      this.autoDeconnexion(dureeExpiration);
      this.utilisateur.next(utilisateur);
    }
  }*/

  autoDeconnexion(dureeExpiration: number) { // en milisecondes
    this.chronoExpirationToken = setTimeout(() => {
      this.deconnecter();
    }, dureeExpiration);
  }

  private gererAuthentification(courriel: string, utilisateurId: string, token: string) {
    // const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    // const expirationDate = new Date(dateExpirationToken);
    const utilisateur = new Utilisateur(courriel, utilisateurId, token);

    this.utilisateur.next(utilisateur);

    //var expiresIn = expirationDate.getTime() - new Date().getTime();

    //this.autoDeconnexion(expiresIn);
    localStorage.setItem('utilisateur', JSON.stringify(utilisateur));
  }

  private gererErreur(erreurReponse: HttpErrorResponse) { // Spécifique à Firebase Authentification ** N'est plus utilisé **
    let messageErreur = 'Une erreur est survenue !';

      if (!erreurReponse.error || !erreurReponse.error.error) {
        return throwError(() => new Error(messageErreur));
      }
      
      switch(erreurReponse.error.error.message) {
        case 'EMAIL_EXISTS':
          messageErreur = 'Ce courriel existe déjà !';
          break;
        case 'OPERATION_NOT_ALLOWED':
          messageErreur = 'Impossible de s\'inscrire pour le moment !';
          break;
        case 'TOO_MANY_ATTEMPTS_TRY_LATER':
          messageErreur = 'Nombre de tentatives atteinte, veuillez réessayer plus tard !';
          break;
        case 'EMAIL_NOT_FOUND':
          messageErreur = 'Les identifiants ne correspondent pas !';
          break;
        case 'INVALID_PASSWORD':
          messageErreur = 'Les identifiants ne correspondent pas !';
          break;
        case 'USER_DISABLED':
          messageErreur = 'Ce compte est désactivé !';
          break;
      }
      return  throwError(() => new Error(messageErreur));
  }
}
