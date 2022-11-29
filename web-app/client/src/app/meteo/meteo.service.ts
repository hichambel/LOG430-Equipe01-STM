import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { map, Observable } from 'rxjs';
import { Meteo } from './meteo.model';

const API_ENDPOINT_METEO ='http://10.194.33.157:5000/';
const ACCESS_TOKEN = 'uE216Y4ByW0zC2PNdZtv';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(private httpClient: HttpClient, ) { }

  rechercherMeteo(dateTemperature: string, heureTemperature: string) : Observable<Meteo> {
    let params = new HttpParams();

    let date = new Date(dateTemperature);
    let momentDate = moment(date);
    let momentString = momentDate.format('YYYY-MM-DD');

    params = params.append('date', momentString);
    params = params.append('hour', heureTemperature);
    params = params.append('token', ACCESS_TOKEN);

    return this.httpClient.get<Meteo>(API_ENDPOINT_METEO + 'weather', {params: params})
      .pipe(map((reponse: any) => {
        let obj = JSON.stringify(reponse);
        let parsedJson = JSON.parse(obj);
        let dateDemande = obj.substring(2,21);

        return parsedJson[dateDemande];
      })
    );
  }
}
