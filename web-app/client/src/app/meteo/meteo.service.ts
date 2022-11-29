import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Meteo } from './meteo.model';

const API_ENDPOINT_METEO ='http://10.194.33.157:5000/';
const ACCESS_TOKEN = 'uE216Y4ByW0zC2PNdZtv';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(private httpClient: HttpClient, ) { }

  rechercherMeteo(dateTemperature: string, heureTemperature: string) : Observable<any> {
    let params = new HttpParams();
    params = params.append('date', '2022-11-30');
    console.log('date : ' + dateTemperature);
    params = params.append('hour', heureTemperature);
    params = params.append('token', ACCESS_TOKEN);
    console.log('heure : ' + heureTemperature);
    console.log(params);

    return this.httpClient.get<any>(API_ENDPOINT_METEO + 'weather', {params: params})
    .pipe(tap(reponse => {
        console.log('La température est de : ');
        console.log(reponse.length);
      })
    );
  }
}
