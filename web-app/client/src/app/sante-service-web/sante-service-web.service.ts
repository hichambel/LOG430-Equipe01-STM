import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs';
import { ServiceWeb } from './serviceweb.model';

const API_ENDPOINT_HEALTH_MONITOR = '';  // TODO: ajouter l'url de notre api.
const API_ENDPOINT_DISCOVERY = '';  // TODO: ajouter l'url de Discovery API.

@Injectable({
  providedIn: 'root'
})
export class SanteServiceWebService {
  serviceWebEmitter: EventEmitter<ServiceWeb[]> = new EventEmitter<ServiceWeb[]>();
  private listeServicesWeb: ServiceWeb[] = [];

  constructor(private httpClient: HttpClient, private snackbar: MatSnackBar) { }

  /**
   * Cette méthode récupère tous les services webs présents dans la réponse du Discovery API.
   */
  recupererServiceWeb() {

    this.httpClient.get<ServiceWeb[]>(API_ENDPOINT_DISCOVERY)
    .subscribe({
      next: (servicesWeb: ServiceWeb[]) => {
        this.listeServicesWeb = servicesWeb;
        this.serviceWebEmitter.emit(this.listeServicesWeb.slice());
      },
      error: (e) => this.snackbar.open('Erreur lors de la récupération des services web !'),
      complete: () => {} 
    });
  }

  recupererServiceWebMOCK() {
    let listeServiceWebMOCK: ServiceWeb[] = [];

    listeServiceWebMOCK.push({id : '1', nom : 'Gestionnaire de Trajet', description : 'Retourne le trajet le plus rapide', url: 'http://portainer.10.194.33.151.nip.io/', code : '200'});
    listeServiceWebMOCK.push({id : '2', nom : 'Gestionnaire de Météo ', description : 'Indique l\'impact de la météo sur le trajet', url: 'http://portainer.10.194.33.151.nip.io/', code : '404'});
    listeServiceWebMOCK.push({id : '3', nom : 'Gestionnaire de Chaos', description : 'Stimule de façon abusive l\'application afin de tester ses vulnérabilités', url: 'http://portainer.10.194.33.151.nip.io/', code : '401'});
    listeServiceWebMOCK.push({id : '4', nom : 'Gestionnaire fictif 1', description : 'Retourne de l\'information juste pour dire qu\'il y a du texte ...', url: 'http://portainer.10.194.33.151.nip.io/', code : '500'});
    listeServiceWebMOCK.push({id : '5', nom : 'Gestionnaire fictif 2', description : 'Retourne de l\'information juste pour dire qu\'il y a du texte ...', url: 'http://portainer.10.194.33.151.nip.io/', code : '206'});
    listeServiceWebMOCK.push({id : '6', nom : 'Gestionnaire fictif 3', description : 'Retourne de l\'information juste pour dire qu\'il y a du texte ...', url: 'http://portainer.10.194.33.151.nip.io/', code : '400'});
    listeServiceWebMOCK.push({id : '7', nom : 'Gestionnaire fictif 4', description : 'Retourne de l\'information juste pour dire qu\'il y a du texte ...', url: 'http://portainer.10.194.33.151.nip.io/', code : '200'});
    listeServiceWebMOCK.push({id : '8', nom : 'Gestionnaire fictif 5', description : 'Retourne de l\'information juste pour dire qu\'il y a du texte ...', url: 'http://portainer.10.194.33.151.nip.io/', code : '503'});
    listeServiceWebMOCK.push({id : '9', nom : 'Gestionnaire fictif 6', description : 'Retourne de l\'information juste pour dire qu\'il y a du texte ...', url: 'http://portainer.10.194.33.151.nip.io/', code : '403'});
  
    this.listeServicesWeb = listeServiceWebMOCK;

    this.serviceWebEmitter.emit(this.listeServicesWeb.slice());

    this.listeServicesWeb.forEach(serviceWeb => {
      this.recupererStatutServiceWebMOCK(serviceWeb.id);
    });
  }

  /**
   * Cette méthode récupère le code de statut du service web.
   * Appel vers le Health Monitor API
   * 
   * @param id L'identifiant du service web.
   */
  recupererStatutServiceWeb(id: string) {
    this.httpClient.get<ServiceWeb>(API_ENDPOINT_HEALTH_MONITOR + '/' + id)
    .subscribe({
      next: (serviceWeb: ServiceWeb) => {
        let index = this.listeServicesWeb.findIndex(unServiceWeb => unServiceWeb.id = id);
        this.listeServicesWeb[index].code = serviceWeb.code;
        this.serviceWebEmitter.emit(this.listeServicesWeb.slice());
      },
      error: (e) => this.snackbar.open('Erreur lors de l\'appel au Health Monitor API!'),
      complete: () => {} 
    });
  }

  recupererStatutServiceWebMOCK(id: string) {
    let listeCodeErreur: string[] = ['200', '404', '400', '500', '401', '203'];

    let index = this.genererChiffreAleatoire(0,5);
    this.listeServicesWeb[+id-1].code = listeCodeErreur[index];
    this.serviceWebEmitter.emit(this.listeServicesWeb.slice());
    
    return this.httpClient.get<ServiceWeb>(API_ENDPOINT_HEALTH_MONITOR + '/' + id)
      .pipe(tap(reponse => {
        console.log('hehe');
        
      })
    );
  }

  private genererChiffreAleatoire(min: number, max: number) : number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
