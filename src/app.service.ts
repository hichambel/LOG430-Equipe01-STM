import { ForbiddenException, Injectable } from '@nestjs/common';
import { HttpService } from "@nestjs/axios";
import { catchError, firstValueFrom, map, Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private http: HttpService) {}

  getHello(): string {
    return 'Health Monitor API (Équipe 01)';
  }

  async getAllServices(){
    const headersRequest = {
      'X-API-KEY': '6leXd37uYyvEjVvC5j3KBeeadyM08Zal5bwSm9gKBJgyO6cqoWa1pacWpriaASzH',
    };

    const request = await this.http
      .get('http://10.194.33.155:3000/services-registry/allServices', { headers: headersRequest })
      .pipe(
        map((res) => { return [res.data, res.status] }),
      )
      .pipe(
        catchError(() => {
          throw new ForbiddenException('API not available');
        }),
      );

    const services = await firstValueFrom(request);
    //console.log(request);
    //const name = request;
    //console.log(services[1]); // the status code
    const resString = JSON.stringify(services[0]);
    const resParsed = JSON.parse(resString);
    this.looper(resParsed);
    return services[0];
    // request.subscribe((x) => {
    //   return x.data[0].name;
    // });

    // console.log(request.pipe(take(1)).subscribe(x => x.data[0].name));
  }

  async looper(services: any){
    // let counter = 0;
    // const interval = setInterval(function() {
    //   counter++;
    //   console.log("Looper looped " + counter);
    //   this.pingService(services);
    //   console.log(services.length);
    //   console.log(services[0]);
    //   console.log(services[0].size);
    //   for (let index = 0; index < services.length; index++) {
    //     const url = services[index].url;
    //     console.log(url);
    //     pingService(url);
    //   }
    //   services.forEach(element => {
    //     this.pingService(element.url);
    //   });
    // }, 5000);

    const interval = setInterval(() => this.pingServices(services), 3000);

    return
  }

  async pingService(req: any){
    // const headersRequest = {
    //   'X-API-KEY': '6leXd37uYyvEjVvC5j3KBeeadyM08Zal5bwSm9gKBJgyO6cqoWa1pacWpriaASzH',
    // };
    //console.log(url);
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

  async pingServices(allServices: any){
    // const headersRequest = {
    //   'X-API-KEY': '6leXd37uYyvEjVvC5j3KBeeadyM08Zal5bwSm9gKBJgyO6cqoWa1pacWpriaASzH',
    // };

    // const request = await this.http
    //   .get('http://10.194.33.155:3000/', { headers: headersRequest })
    //   .pipe(
    //     map((res) => { return [res.data, res.status] }),
    //   )
    //   .pipe(
    //     catchError(() => {
    //       throw new ForbiddenException('API not available');
    //     }),
    //   );

    // const services = await firstValueFrom(request);
    // //console.log(request);
    // //const name = request;
    // console.log(services[1]); // the status code
    // const resString = JSON.stringify(services[0]);
    // const resParsed = JSON.parse(resString);

    for (let index = 0; index < allServices.length; index++) {
      let request;
      if (allServices[index].name != "MONITORING") {
        request = await this.http
        .get(allServices[index].url)
        .pipe(
          map((res) => { return res.status }),
        )
        .pipe(
          catchError(() => {
            throw new ForbiddenException('API not available');
          }),
        );
      } else {
        
      }
      if (!allServices[index].isAvailable && request == 200) {
        const headersRequest = {
          'X-API-KEY': '6leXd37uYyvEjVvC5j3KBeeadyM08Zal5bwSm9gKBJgyO6cqoWa1pacWpriaASzH',
        };

        const bodyRequest = {
          "serviceId": allServices[index].id,
          "status": "UP"
        }
    
        const request = await this.http
          .get('http://10.194.33.155:3000/services-registry/update-service-status', { headers: headersRequest, data: bodyRequest })
          .pipe(
            map((res) => { return [res.data, res.status] }),
          )
          .pipe(
            catchError(() => {
              throw new ForbiddenException('API not available');
            }),
          );
      } else {
        
      }
      
      
    }

    //console.log("url: "+ allServices[0].url);
    return;
  }
}
