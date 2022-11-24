import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getAllApisHealth(): Promise<any>;
    getOneApiHealthByUrl(req: string): Promise<boolean>;
    getOneApiHealthById(id: number): Promise<boolean>;
}
