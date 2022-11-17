import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs';
import { ServiceWeb } from './serviceweb.model';

const API_ENDPOINT_HEALTH_MONITOR ='http://10.194.33.151:3000/';

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
  recupererStatusServiceWeb() {
    this.httpClient.get<ServiceWeb[]>(API_ENDPOINT_HEALTH_MONITOR + 'all-apis-health')
    .subscribe({
      next: (servicesWeb: ServiceWeb[]) => {
        this.listeServicesWeb = servicesWeb;
        this.serviceWebEmitter.emit(this.listeServicesWeb.slice());
      },
      error: (e) => this.snackbar.open('Erreur lors de la récupération des services web !'),
      complete: () => {} 
    });
  }

  /**
   * Cette méthode récupère le statut du service web.
   * Appel vers le Health Monitor API
   * 
   * @param id L'identifiant du service web.
   */
  recupererStatutServiceWebParId(id: string) {
    return this.httpClient.get<boolean>(API_ENDPOINT_HEALTH_MONITOR + 'api-health?id=' + id)
      .pipe(tap(response => {
        let index = this.listeServicesWeb.findIndex(unServiceWeb => unServiceWeb.id == id);
        this.listeServicesWeb[index].isAvailable = response;
        this.serviceWebEmitter.emit(this.listeServicesWeb.slice());
      })
    );
  }

}
