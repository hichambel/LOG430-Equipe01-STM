import { ForbiddenException, HttpException, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { HttpService } from "@nestjs/axios";
import { catchError, firstValueFrom, lastValueFrom, map } from 'rxjs';

@Injectable()
export class AppService implements OnApplicationBootstrap {
  constructor(private http: HttpService) {}
  onApplicationBootstrap() {
    this.getAllServices();
  }

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
    return resParsed;
  }

  async pingServiceByUrl(req: any){
    //console.log(req.name);
    let request;
    try {
      request = await this.http
      .get(req.url)
      .pipe(
        map((res) => { return res.status }),
      )
    } catch (error) {
      console.log("Mauvais url doofus");
    }
    
    
    //console.log("This is request : " + request.status);
    let service;
    try {
      service = await firstValueFrom(request);
    } catch (error) {
      console.log("doubie " + req.name + " " + req.url);
    }
    const requestString = JSON.stringify(service);
    console.log(req.name + " Pinged at : " + req.url + " and the response is " + requestString);
    if (requestString == "200") {
      return true
    } else {
      return false
    }
  }

  async pingServiceById(req: any){

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


    console.log(req);
    for (let index = 0; index < resParsed.length; index++) {
      if (resParsed[index].id === req.id) {
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
    }
    return;
  }

  async updateDiscoveryApi(id: number, available: boolean){
    const customConfig = {
      headers: {
        'X-API-KEY': '6leXd37uYyvEjVvC5j3KBeeadyM08Zal5bwSm9gKBJgyO6cqoWa1pacWpriaASzH'
      }
    };
    // const headersRequest = {
    //   'X-API-KEY': '6leXd37uYyvEjVvC5j3KBeeadyM08Zal5bwSm9gKBJgyO6cqoWa1pacWpriaASzH',
    // };

    const bodyRequest = {
      "serviceId": id,
      "status": "UP"
    }

    if (available) {
      bodyRequest.status = "UP";
    } else {
      bodyRequest.status = "DOWN";
    }

    console.log("Bodyrequest : " + JSON.stringify(bodyRequest));

    const response = await this.http
      .post('http://10.194.33.155:3000/services-registry/update-service-status', bodyRequest, customConfig)
      .pipe(
        catchError(() => {
          throw new ForbiddenException('API not available');
        }),
      );
    // const service = await lastValueFrom(response);
    // const requestString = JSON.stringify(service);
    // console.log("Status : " + requestString);
  }

  async pingServices(allServices: any){
    for (let index = 0; index < allServices.length; index++) {
      console.log("Name : " + allServices[index].name + " and Url : " + allServices[index].url);
      let response = true;
      if (allServices[index].name != "MONITORING") {
        response = await this.pingServiceByUrl(allServices[index]);
      }
      console.log("response : " + JSON.stringify(response));
      if (!allServices[index].isAvailable && response == true) {
        await this.updateDiscoveryApi(allServices[index].id, true);
      } else {
        if(allServices[index].isAvailable && response == false){
          console.log("service to be updated Name : " + allServices[index].name + " and Url : " + allServices[index].url);
          await this.updateDiscoveryApi(allServices[index].id, false);
        }
      }
    }
    return;
  }
}
