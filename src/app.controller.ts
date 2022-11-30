import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Ctx, Payload, RmqContext } from '@nestjs/microservices';
import { ApiParam, ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("all-apis-health")
  @ApiResponse({
      status: 200,
      description: 'retourne une liste exhaustive de tous les apis en format JSON'})
  getAllApisHealth(){
    return this.appService.getAllServices();
  }

  @Get("api-health")
  @ApiParam({ name: 'url' })
  @ApiResponse({
    status: 200,
    description: '{ boolean } true si available et false sinon'})
  getOneApiHealthByUrl(@Body() req: string){
    return this.appService.pingServiceByUrl(req);
  }

  @Get("api-health-by-id")
  // @ApiParam({ name: 'idApi' })
  getOneApiHealthById(@Param() id: number){
    return this.appService.pingServiceById(id);
  }

  // @Post("updateUser")
  // // @ApiParam({ name: 'idApi' })
  // updateDiscoveryApi(@Body() body: any){
  //   return this.appService.updateDiscoveryApi(body.serviceId, body.status);
  // }

  // public async serviceRegisterHandler(
  //   @Payload() data:any,
  //   @Ctx() context: RmqContext
  // ){
  //   const channel = context.getChannelRef();
  //   const originalMessage = context.getMessage();
  //   this.appService.getAllServices();
  //   console.log("Registered Service: ", data);
  // }
}
