import { Body, Controller, Get, Param } from '@nestjs/common';
import { ApiParam, ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("all-apis-health")
  @ApiResponse({
    status: 200,
    description: 'retourne une liste exhaustive de tous les apis en format JSON'})
  getOneApiHealth(){
    return this.appService.getAllServices();
  }

  @Get("api-health")
  @ApiParam({ name: 'url' })
  @ApiResponse({
    status: 200,
    description: '{ boolean } true si available et false sinon'})
  getAllApisHealth(@Body() req: string){
    return this.appService.pingService(req);
  }

  // public async serviceRegisterHandler(
  //   @Payload() data:any,
  //   @Ctx() context: RmqContext
  // ){
  //   const channel = context.getChannelRef();
  //   const originalMessage = context.getMessage();
  //   console.log("Registered Service: ", data);
  // }
}
