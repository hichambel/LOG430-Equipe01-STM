import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getOneApiHealth(): Promise<any>;
    getAllApisHealth(req: string): Promise<boolean>;
}
