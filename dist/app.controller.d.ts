import { RmqContext } from '@nestjs/microservices';
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getOneApiHealth(): Promise<any>;
    getAllApisHealth(req: string): Promise<boolean>;
    serviceRegisterHandler(data: any, context: RmqContext): Promise<void>;
}
