import { ForbiddenException, Injectable } from '@nestjs/common';
import { HttpService } from "@nestjs/axios";
import { catchError, firstValueFrom, map, Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private http: HttpService) {}

  async getAllServices(){
    const headersRequest = {
      'X-API-KEY': '6leXd37uYyvEjVvC5j3KBeeadyM08Zal5bwSm9gKBJgyO6cqoWa1pacWpriaASzH',
    };

    const request = await this.http
      .get('http://10.194.33.155:3000/services-registry/allServices', { headers: headersRequest })
      .pipe(
        map((res) => { return res.data}),
      )
      .pipe(
        catchError(() => {
          throw new ForbiddenException('API not available');
        }),
      );

    const services = await firstValueFrom(request); 
    const resString = JSON.stringify(services);
    const resParsed = JSON.parse(resString);
    setInterval(() => this.pingServices(resParsed), 3000);
    return services;
  }

  async pingService(req: any){
    console.log(req.name);
    const request = await this.http
      .get(req.url)
      .pipe(
        map((res) => { return res.status }),
      )
      .pipe(
        catchError(() => {
          throw new ForbiddenException('API not available');
        }),
      );

    const service = await firstValueFrom(request);
    const requestString = JSON.stringify(service);
    if (requestString == "200") {
      return true
    } else {
      return false
    }
  }

  async updateDiscoveryApi(id: number, available: boolean){
    const headersRequest = {
      'X-API-KEY': '6leXd37uYyvEjVvC5j3KBeeadyM08Zal5bwSm9gKBJgyO6cqoWa1pacWpriaASzH',
    };

    const bodyRequest = {
      "serviceId": id,
      "status": "UP"
    }

    if (available) {
      bodyRequest.status = "UP";
    } else {
      bodyRequest.status = "DOWN";
    }

    await this.http
      .post('http://10.194.33.155:3000/services-registry/update-service-status', { headers: headersRequest, data: bodyRequest })
      .pipe(
        catchError(() => {
          throw new ForbiddenException('API not available');
        }),
      );
  }

  async pingServices(allServices: any){
    for (let index = 0; index < allServices.length; index++) {
      let response;
      if (allServices[index].name != "MONITORING") {
        response = this.pingService(allServices[index]);
      }
      if (!allServices[index].isAvailable && response) {
        this.updateDiscoveryApi(allServices[index].id, true);
      } else {
        if(allServices[index].isAvailable){
          this.updateDiscoveryApi(allServices[index].id, false);
        }
      }
    }
    return;
  }
}
